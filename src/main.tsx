import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes/index.tsx";
import { GlobalStyles } from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  // </React.StrictMode>
);
