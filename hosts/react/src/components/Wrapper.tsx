import Footer from "./Footer";
import React from "react";
import ContentMetaGroup from "./ContentMetaGroup";

type Props = {
  children?: React.ReactNode;
}

export default function Wrapper(props: Props) {
  const { children } = props;
  return (
    <div>
      <div className="bg-red-500" style={{ backgroundColor: "antiquewhite", padding: "4px" }}>
        <header
          id={"title"}
          className={"text-2xl mb-2"}
        >
          header
        </header>
        <ContentMetaGroup />
      </div>
      {children}
      <Footer />
    </div>
  );
}
