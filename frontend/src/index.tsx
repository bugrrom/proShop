//Core
import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { css, Global } from "@emotion/core";

// Other
import { App } from "./element/App/App";
import { store } from "./init/store";

render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              font-family: "Arial", "sans-serif", "FF Meta Serif", "Bree";
            }
          `}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
