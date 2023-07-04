import React from "react";
import Content, { ContentMeta } from "./mfeCore";
import contentMetas from "./contentMetas";

const App = () => {
  const [contentMetas, setContentMetas] = React.useState<ContentMeta[]>([]);
  const [contentMeta, setContentMeta] = React.useState<ContentMeta | undefined>(undefined);

  React.useEffect(() => {
    fetch("http://localhost:3000/deployment/production")
      .then((res) => res.json())
      .then((data) => data.map((deployment: any) => {
        const { version } = deployment;
        const { application } = version;
        return { url: version.url, module: "./Layout", scope: application.name };
      }))
      .then((contentMetas) => {
        setContentMetas(contentMetas);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "antiquewhite", padding: "4px" }}>
      <header style={{ textAlign: "center" }}>header</header>
      {contentMetas.map((info) => {
        return (
          <button onClick={() => {
            setContentMeta({
              url: info.url,
              scope: info.scope,
              module: info.module
            });
          }}>{info.scope}{info.module}
          </button>
        );
      })}
      <React.Suspense fallback="Loading Button">
        {contentMeta && (
          <Content contentMeta={contentMeta}>
            <div>
              this component is injected from a host
            </div>
          </Content>
        )}
        <footer style={{ padding: "4px", textAlign: "center" }}>footer</footer>
      </React.Suspense>
    </div>
  );
};

export default App;
