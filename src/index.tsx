import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { register as registerSW } from "./serviceWorker";

import "typeface-lato";

const FullscreenStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, body > div {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
`;

const styledApp = (
  <>
    <FullscreenStyle/>
    <App />
  </>
);


ReactDOM.render(styledApp, document.getElementById('root'));
registerSW(null);
