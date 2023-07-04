import React from 'react';
import Script from 'next/script';

declare global {
  function __webpack_init_sharing__(key: string): Promise<void>;
  const __webpack_share_scopes__: any;
}

function loadComponent(scope: string, module: string) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');

    // @ts-ignore
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);
    return factory();
  };
}

const useDynamicScript = (url: string) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement('script');

    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

export type ContentMeta = {
  url: string;
  scope: string;
  module: string;
}

type ContentProps = {
  contentMeta: ContentMeta,
  children?: React.ReactNode;
}


function Content(props: ContentProps) {
  const { contentMeta: {scope, module, url} } = props;
  const loadResult = useDynamicScript(url);

  if (!loadResult.ready) {
    return <h2>Loading dynamic script: {url}</h2>;
  }

  if (loadResult.failed) {
    return <h2>Failed to load dynamic script: {url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(scope, module)
  );

  return (
    <React.Suspense fallback="Loading Content">
      <Component {...props} />
    </React.Suspense>
  );
}

function ContentServer(props: ContentProps) {
  const { contentMeta: {scope, module, url} } = props;

  const Component = React.lazy(
    loadComponent(scope, module)
  );

  return (
    <React.Suspense fallback="Loading Content">
      <Component {...props} />
      <Script src={url} />
    </React.Suspense>
  );
}

export default ContentServer;
