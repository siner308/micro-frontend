import React from "react";
import { importRemote } from "@module-federation/utilities";

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
  const Component = React.lazy(() => importRemote({ url: url, scope, module }));
  return (
    <div id={'root'}>
      <React.Suspense fallback="">
        <Component />
      </React.Suspense>
    </div>
  );
}

export default Content;
