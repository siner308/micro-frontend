import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Index from "./routes";
import Page from "./routes/page";
import Wrapper from "./components/Wrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper><Index /></Wrapper>,
  },
  {
    path: ":scope/*",
    element: <Wrapper><Page /></Wrapper>,
  },
]);
