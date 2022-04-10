import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { theme } from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />;
  </ThemeProvider>
);
export default MyApp;
