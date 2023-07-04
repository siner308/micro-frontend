import React from 'react';
import Content, { ContentMeta } from './mfeCore';
import contentMetas from './contentMetas';

const App = () => {
  const [contentMeta, setContentMeta] = React.useState<ContentMeta>(contentMetas[0]);

  return (
    <div style={{ backgroundColor: 'antiquewhite', padding: '4px' }}>
      <header style={{ textAlign: 'center' }}>header</header>
      {contentMetas.map((info) => {
        return (
          <button onClick={() => {
            setContentMeta({
              url: info.url,
              scope: info.scope,
              module: info.module,
            })
          }}>{info.scope}{info.module}
          </button>
        )
      })}
      <React.Suspense fallback="Loading Button">
        <Content contentMeta={contentMeta}>
          <div>
            this component is injected from a host
          </div>
        </Content>
        <footer style={{ padding: '4px', textAlign: 'center' }}>footer</footer>
      </React.Suspense>
    </div>
  )
}

export default App;
