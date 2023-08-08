import { Link } from "react-router-dom";
import * as React from "react";

export function Buttons() {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <Link style={{ marginRight: "4px", backgroundColor: "antiquewhite" }} to={"/remote1"}>root</Link>
      <Link style={{ marginRight: "4px", backgroundColor: "antiquewhite" }} to={"/remote1/hello"}>hello</Link>
      <Link style={{ marginRight: "4px", backgroundColor: "antiquewhite" }} to={"/remote1/world"}>world</Link>
    </div>
  );
}
