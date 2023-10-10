import React from "react";
import { importRemote } from "@module-federation/utilities";
import { ErrorBoundary } from "react-error-boundary";
// @ts-ignore
import { Vite } from 'vite/vite';

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
  // const Component = Vite;
  const Component = React.lazy(() => importRemote({ url, scope, module }));
  return (
    <div id={"root"}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Component />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Content;
