import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { routers } from "./routers";
import { store } from "./store";
import { theme } from "./styles/theme";
import { GlobalFonts } from "./styles/global_fonts";
import { GlobalStyle } from "./styles/global_style";
import { ToastProvider } from "./shared/toast/toastProvider";

const root_element = document.getElementById("root");
if (root_element) {
  const root_return = createRoot(root_element);
  root_return.render(
    <StrictMode>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <GlobalFonts />
            <GlobalStyle />
            <RouterProvider router={routers} />
          </ToastProvider>
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  );
} else {
  throw new Error(
    "The document does not contain an element with the ID 'root'."
  );
}
