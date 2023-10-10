"use client";

import Content, { ContentMeta } from "../../mfe/mfeCore";
import React from "react";
import { contentMetaStates } from "@/atom/contentMetaStates";
import { useRecoilValue } from "recoil";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Index() {
  const pathname = usePathname();
  const contentMetas = useRecoilValue(contentMetaStates);
  const [contentMeta, setContentMeta] = React.useState<ContentMeta | undefined>(undefined);

  const router = useRouter();

  React.useEffect(() => {
    const targetContentMeta = contentMetas?.find((contentMeta) => contentMeta.scope === router.query.scope);
    setContentMeta(targetContentMeta);
  }, [contentMetas, router.query.scope, pathname]);

  return (
    <>
      {contentMeta ? (
        // <root.div id={`shadow-${contentMeta.scope}-${contentMeta.module}`}>
        <Content contentMeta={contentMeta} />
        // </root.div>
      ) : <h1>404 Not Found</h1>}
    </>
  );
}
