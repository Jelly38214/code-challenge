import { createTheme, hslToRgb, PaletteOptions } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: hslToRgb("hsl(0, 0%, 98%)"),
      main: hslToRgb("hsl(0, 0%, 98%)"),
      dark: hslToRgb("hsl(0, 0%, 98%)"),
    },
    background: {
      default: hslToRgb("hsl(0, 0%, 98%)"),
      paper: "#fff",
    },
    text: {
      primary: hslToRgb("hsl(200, 15%, 8%)"),
      secondary: "#a5a5a5",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: hslToRgb("hsl(207, 26%, 17%)"),
      main: hslToRgb("hsl(207, 26%, 17%)"),
      dark: hslToRgb("hsl(207, 26%, 17%)"),
    },
    background: {
      default: hslToRgb("hsl(207, 26%, 17%)"),
      paper: hslToRgb("hsl(209, 23%, 22%)"),
    },
    text: {
      primary: hslToRgb("hsl(0, 0%, 100%)"),
      secondary: "#c8d4dc",
    },
  },
});
