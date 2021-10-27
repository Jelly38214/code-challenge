import { CountryItem } from "./countryInfoItem";
import { FC } from "react";
import { ICountry } from "../types/index";
import { Box } from "@mui/material";
import Link from "next/link";

interface ICountryListProps {
  countryList: ICountry[];
}

export const CountryList: FC<ICountryListProps> = (props) => {
  if (!props.countryList.length) return null;

  const fourItemGroupArray = [];
  for (let i = 0, len = props.countryList.length; i < len; i += 4) {
    fourItemGroupArray.push(props.countryList.slice(i, i + 4));
  }

  return (
    <Box>
      {fourItemGroupArray.map((itemGroup, i) => {
        return (
          <Box
            key={i}
            sx={{ paddingTop: i === 0 ? 0 : "72px", cursor: "pointer" }}
          >
            {itemGroup.map(
              ({ name, capital, population, region, flags, cioc }, j) => (
                <Link key={i + j} href={`/detail/${cioc}`}>
                  <Box
                    sx={{
                      marginLeft: j === 0 ? "0" : "70px",
                      display: "inline-block",
                    }}
                  >
                    <CountryItem
                      officialName={name.official}
                      Capital={capital?.toString()}
                      Population={population}
                      Region={region}
                      flag={flags.png}
                    />
                  </Box>
                </Link>
              )
            )}
          </Box>
        );
      })}
    </Box>
  );
};
