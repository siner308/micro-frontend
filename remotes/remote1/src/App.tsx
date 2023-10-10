import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => (
  <RouterProvider router={router} />
);

export default App;
