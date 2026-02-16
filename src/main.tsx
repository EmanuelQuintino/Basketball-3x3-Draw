import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { AthletesProvider } from "./contexts/athletes-provider.tsx";
import { AppRoutes } from "./routes/index.tsx";
import { GlobalStyles } from "./styles/global.ts";
import { appTheme } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <AthletesProvider>
        <AppRoutes />
        <GlobalStyles />
      </AthletesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
