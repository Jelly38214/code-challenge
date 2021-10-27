import type { NextPage } from "next";
import { Box } from "@mui/material";
import { DesktopHeader } from "../src/components/desktopHeader";
import { SearchBar } from "../src/components/searchBar";
import { CountryList } from "../src/components/countryList";
import { ICountry } from "../src/types/index";
import { useAllCountries } from "../src/hooks/useAllCountries";
import { Loading } from "../src/components/loading";
import { useState } from "react";

const homePageWrapperStyle = {
  fontSize: "14px",
  color: "text.primary",
  bgcolor: "background.default",
};

const contentWrapperStyle = {
  margin: "0 auto",
  width: "1280px",
  p: "45px 0",
};

interface ISearchCriteria {
  country?: string;
  region?: string;
}

const Home: NextPage = () => {
  let allCountriesList: ICountry[] = useAllCountries();

  const [criteria, setCriteria] = useState<ISearchCriteria>({
    country: "",
    region: "",
  });

  let isFilter: boolean = false;
  if (!!criteria.country) {
    isFilter = true;
    allCountriesList = allCountriesList.filter((item) =>
      item.name.official
        .toLocaleLowerCase()
        .includes(criteria.country?.toLocaleLowerCase() as string)
    );
  }

  if (!!criteria.region) {
    isFilter = true;
    allCountriesList = allCountriesList.filter(
      (item) => item.region === criteria.region
    );
  }

  return (
    <Box sx={homePageWrapperStyle}>
      <DesktopHeader />
      <Box sx={contentWrapperStyle}>
        <SearchBar
          countryList={allCountriesList}
          criteriaDispatch={setCriteria}
        />
        {allCountriesList.length === 0 && !isFilter && "loading..."}
        {!!allCountriesList.length && (
          <Box sx={{ marginTop: "48px" }}>
            <CountryList countryList={allCountriesList} />
          </Box>
        )}
        {allCountriesList.length === 0 && isFilter && (
          <p>No Result, plz typing others</p>
        )}
      </Box>
    </Box>
  );
};

export default Home;
