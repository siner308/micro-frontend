import React from "react";
import Content, { ContentMeta } from "./mfeCore";
import Footer from "./components/Footer";
import root from "react-shadow";

import '../public/reset.css'

const App = () => {
  const [contentMetas, setContentMetas] = React.useState<ContentMeta[]>([]);
  const [contentMeta, setContentMeta] = React.useState<ContentMeta | undefined>(undefined);

  React.useEffect(() => {
    fetch("http://localhost:3000/deployment/production")
      .then((res) => res.json())
      .then((data) => data.map((deployment: any) => {
        const { version } = deployment;
        const { application } = version;
        return { url: version.url, module: `./${version.module}`, scope: application.name };
      }))
      .then((contentMetas) => {
        setContentMetas(contentMetas);
      });
  }, []);

  return (
    <div>
      <div className='bg-red-500' style={{ backgroundColor: "antiquewhite", padding: "4px" }}>
        <h1>header</h1>
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
      </div>
      {contentMeta && (
        <root.div className={"quote"}>
          <Content contentMeta={contentMeta}>
            <div>
              this component is injected from a host
            </div>
          </Content>
        </root.div>
      )}
      <Footer />
    </div>
  );
};

export default App;
