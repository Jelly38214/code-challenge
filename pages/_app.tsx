import "../styles/globals.css";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";

import { createContext, useReducer, Reducer, Dispatch } from "react";
import produce from "immer";
import { ThemeProvider } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";
import type { AppProps } from "next/app";

import { darkTheme, lightTheme } from "../src/theme";
import { ICountry } from "../src/types";

interface IAppContext {
  appState: { mode: PaletteMode; allCountriesList: ICountry[] };
  appDispatch: Dispatch<IAppReducerAction>;
}

export const AppContext = createContext<IAppContext>({
  appState: {
    mode: "light",
    allCountriesList: [],
  },
  appDispatch: null as any,
});

interface IAppState {
  mode: PaletteMode;
  allCountriesList: ICountry[];
}

const appInitialState: IAppState = {
  mode: "light",
  allCountriesList: [],
};

interface IAppReducerActionForMode {
  type: "MODE";
  payload: PaletteMode;
}

interface IAppReducerActionForOther {
  type: "ALLCOUNTRYDATA";
  payload: ICountry[];
}

export type IAppReducerAction =
  | IAppReducerActionForMode
  | IAppReducerActionForOther;

const appStateReducer = produce<
  (state: IAppState, action: IAppReducerAction) => void
>((draft, action) => {
  if (action.type === "MODE") {
    draft.mode = action.payload;
  }

  if (action.type === "ALLCOUNTRYDATA") {
    draft.allCountriesList = action.payload;
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  const [appState, appDispatch] = useReducer<
    Reducer<IAppState, IAppReducerAction>
  >(appStateReducer, appInitialState);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <ThemeProvider theme={appState.mode === "light" ? lightTheme : darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
export default MyApp;
