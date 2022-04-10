import { theme } from "../src/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import * as nextImage from "next/image";
import "../src/styles/globals.css";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <EmotionThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Story {...context} />
        </ThemeProvider>
      </EmotionThemeProvider>
    );
  },
];
