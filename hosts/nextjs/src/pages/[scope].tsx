import React from 'react';
import Content from '@/app/mfeCore';
import contentMetas from '@/app/contentMetas';
import ContentMetaControlGroup from '@/app/components/ContentMetaControlGroup';
import { useRouter } from 'next/router';
import ContentServer from '@/app/mfeCore';

export default function Home() {
  const router = useRouter();
  const path = router.asPath;
  const contentMeta = contentMetas.find((info) => {
    return path.includes(info.scope);
  }) || contentMetas[0];


  return (
    <div style={{ backgroundColor: 'antiquewhite', padding: '4px' }}>
      <header style={{ textAlign: 'center' }}>header</header>
      <ContentMetaControlGroup />
      <React.Suspense fallback="Loading Button">
        <ContentServer contentMeta={contentMeta}>
          <div>
            this component is injected from a host
          </div>
        </ContentServer>
        <footer style={{ padding: '4px', textAlign: 'center' }}>footer</footer>
      </React.Suspense>
    </div>
  )
}
