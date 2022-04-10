import { createTheme, ThemeOptions } from "@mui/material/styles";

const defaultTheme = createTheme();

export const myTheme: ThemeOptions = {
  typography: {
    h1: {
      fontSize: "28px",
      fontWeight: 600,
      [defaultTheme.breakpoints.between("sm", "md")]: {
        fontSize: "36px",
      },
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "48px",
      },
    },
    h2: {
      fontSize: "24px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "28px",
      },
    },
    h3: {
      fontSize: "21px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "24px",
      },
    },
    h4: {
      fontSize: "18px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "21px",
      },
    },
    h5: {
      fontSize: "16px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "18px",
      },
    },
    subtitle1: {
      fontFamily: "Poppins-SemiBold",
      fontSize: "14px",
      fontWeight: 600,
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "16px",
      },
    },
    subtitle2: {
      fontFamily: "Poppins-SemiBold",
      fontSize: "12px",
      fontWeight: 600,
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "14px",
      },
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "16px",
      },
    },
    body2: {
      fontSize: "12px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "14px",
      },
    },
    button: {
      fontSize: "14px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "16px",
      },
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "14px",
      },
    },
    overline: {
      fontSize: "12px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "14px",
      },
    },
    fontWeightMedium: 600,
  },
  palette: {
    mode: "light",
    primary: {
      light: "#EAF2F9",
      main: "#2D7AC1",
      dark: "#245C92",
    },
    secondary: {
      light: "#FEF2E9",
      main: "#F47920",
      dark: "#B75B18",
    },
    success: {
      light: "#F3F9E9",
      main: "#82BE21",
      dark: "#628F19",
    },
    error: {
      light: "#FCF5F8",
      main: "#D13574",
      dark: "#A92F3E",
    },
    warning: {
      light: "#FFFCF3",
      main: "#FFC107",
      dark: "#BB9209",
    },
    info: {
      light: "#E8F6F8",
      main: "#17A2B8",
      dark: "#307A8B",
    },
    grey: {
      50: "#FAFAFA",
      200: "#F2F2F2",
      400: "#CCCCCC",
      600: "#797979",
      800: "#333333",
    },
    divider: "#CCCCCC",
  },
  spacing: [2, 4, 8, 16, 24, 32, 40, 48],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
};

export const theme = createTheme(myTheme);

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
