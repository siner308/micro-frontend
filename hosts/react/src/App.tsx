import React from 'react';
import System from './util';

const App = () => {
  const [system, setSystem] = React.useState(undefined);

  const deployment = require('../deployment.json');
  return (
    <div style={{ backgroundColor: 'antiquewhite', padding: '4px' }}>
      <header style={{ textAlign: 'center' }}>header</header>
      {Object.keys(deployment).map((key) => {
        return (
          <button onClick={() => {
            setSystem({
              url: deployment[key].url,
              scope: key,
              module: deployment[key].module,
            })
          }}>{key}{deployment[key].module}
          </button>
        )
      })}
      <React.Suspense fallback="Loading Button">
        <System system={system}>
          <div>
            우와 remote component에 component injection도 가능하다고?
          </div>
        </System>
        <footer style={{ padding: '4px', textAlign: 'center' }}>footer</footer>
      </React.Suspense>
    </div>
  )
}

export default App;
