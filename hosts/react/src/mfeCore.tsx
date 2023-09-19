import React from "react";
import { importRemote } from "@module-federation/utilities";
import { ErrorBoundary } from "react-error-boundary";

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
  const { contentMeta: { scope, module, url } } = props;
  console.log(scope, module, url);
  const Component = React.lazy(() => importRemote({ url, scope, module }));
  // let Component;
  // if (scope === 'remote1') {
  //   Component = React.lazy(() => import ('remote1/remote1'));
  // } else if (scope === 'remote2') {
  //   Component = React.lazy(() => import ('remote2/remote2'));
  // } else if (scope === 'admin') {
  //   Component = React.lazy(() => import ('admin/admin'));
  // } else if (scope === 'vite') {
  //   Component = React.lazy(() => import ('vite/vite'));
  // }
  console.log("loading component");
  return (
    <div id={"root"}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <React.Suspense fallback="">
          <Component />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Content;
