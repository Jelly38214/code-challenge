import { useEffect, useContext, useState } from "react";
import { AppContext } from "../../pages/_app";
import { ICountry } from "../types/index";

export function useAllCountries(): ICountry[] {
  const { appDispatch, appState } = useContext(AppContext);
  const [countryDataState, setCountryDataState] = useState<ICountry[]>(
    appState.allCountriesList
  );

  useEffect(() => {
    if (appState.allCountriesList.length > 0) return;

    (async () => {
      const result = await fetch("/api/getAllCountry")
        .then((data) => data.json())
        .then((data) => data.data)
        .catch(() => []);

      if (result) {
        setCountryDataState(result);
        appDispatch({ type: "ALLCOUNTRYDATA", payload: result });
      }
    })();
  }, [appState.allCountriesList]);

  return countryDataState;
}
