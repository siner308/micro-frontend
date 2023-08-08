import Content, { ContentMeta } from "../mfeCore";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { contentMetaStates } from "../atom/contentMetaStates";
import { useRecoilValue } from "recoil";

export default function Page() {
  const { scope, path1, path2, path3 } = useParams<{
    scope: string,
    path1?: string,
    path2?: string,
    path3?: string
  }>();
  const { pathname } = useLocation();
  const contentMetas = useRecoilValue(contentMetaStates);
  const [contentMeta, setContentMeta] = React.useState<ContentMeta | undefined>(undefined);

  React.useEffect(() => {
    const targetContentMeta = contentMetas?.find((contentMeta) => contentMeta.scope === scope);
    setContentMeta(targetContentMeta);
  }, [scope, pathname, path1, path2, path3]);

  return (
    <>
      {contentMeta ? (
        // <root.div id={`shadow-${contentMeta.scope}-${contentMeta.module}`}>
        <Content contentMeta={contentMeta} />
        // </root.div>
      ) : null}
    </>
  );
}
