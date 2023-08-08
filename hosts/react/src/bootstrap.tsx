import React from "react";
import * as ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("host") as HTMLElement);


root.render(<RecoilRoot><RouterProvider router={router} /></RecoilRoot>);
