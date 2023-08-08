import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Buttons } from "./components/button";

export const router = createBrowserRouter([
    {
        path: "/remote1",
        element: <div>root <Buttons/></div>,
    },
    {
        path: "/remote1/hello",
        element: <div>hello <Buttons /></div>,
    },
    {
        path: "/remote1/world",
        element: <div>world <Buttons /></div>,
    }
]);
