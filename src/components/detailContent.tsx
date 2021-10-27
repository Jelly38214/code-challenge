import { FC } from "react";
import { Box } from "@mui/material";
import { ICountry } from "../types/index";
import Link from "next/link";

interface IDetailContentProps {
  countryItem: ICountry;
  bordersItem: ICountry[];
}

const propertyItemStyle = {
  padding: "0",
  margin: "0 0 18px 0",
  color: "text.primary",
};

const secondaryTextStyle = {
  color: "text.secondary",
};

export const DetailContent: FC<IDetailContentProps> = (props) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = props.countryItem;

  const currenciesString: string = Object.keys(currencies).toString();
  const languageString: string = Object.values(languages).toString();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={flags.png} width="560px" height="400px" />
      <Box sx={{ marginLeft: "120px", flex: 1 }}>
        <Box
          sx={{
            marginBottom: "36px",
            fontWeight: "bold",
            fontSize: "30px",
            color: "text.primary",
          }}
        >
          {name.common}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ marginRight: "100px" }}>
            <Box component="p" sx={propertyItemStyle}>
              Native Name:{" "}
              <Box component="span" sx={secondaryTextStyle}>
                {name.common}
              </Box>
            </Box>
            <Box component="p" sx={propertyItemStyle}>
              Population:{" "}
              <Box component="span" sx={secondaryTextStyle}>
                {population}
              </Box>
            </Box>
            <Box component="p" sx={propertyItemStyle}>
              Region:{" "}
              <Box component="span" sx={secondaryTextStyle}>
                {region}
              </Box>
            </Box>
            <Box component="p" sx={propertyItemStyle}>
              Sub Region:{" "}
              <Box component="span" sx={secondaryTextStyle}>
                {subregion}
              </Box>
            </Box>
            <Box component="p" sx={propertyItemStyle}>
              Capital:{" "}
              <Box component="span" sx={secondaryTextStyle}>
                {capital.toString()}
              </Box>
            </Box>
          </Box>
          <Box>
            <Box component="p" sx={propertyItemStyle}>
              Top Level Domain:{" "}
              <Box component="span" sx={secondaryTextStyle}>
                {tld[0]}
              </Box>
            </Box>
            <Box component="p" sx={propertyItemStyle}>
              Currencies:{" "}
              <Box component="span" sx={secondaryTextStyle}>
                {currenciesString}
              </Box>
            </Box>
            <Box component="p" sx={propertyItemStyle}>
              Languages:{" "}
              <Box component="span" sx={secondaryTextStyle}>
                {languageString}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <Box
            component="span"
            sx={{ marginRight: "14px", color: "text.primary" }}
          >
            Border Countries:
          </Box>
          {props.bordersItem.map((item) => (
            <Link href={`/detail/${item.cioc}`}>
              <Box
                key={item.cioc}
                component="span"
                sx={{
                  bgcolor: "background.paper",
                  margin: "8px 8px 8px 0px",
                  cursor: "pointer",
                  display: "inline-block",
                  textAlign: "center",
                  width: "96px",
                  lineHeight: "28px",
                  borderRadius: "4px",
                  boxShadow: "#1f2c34 0px 0px 4px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontSize: "12px",
                  color: "text.secondary",
                }}
              >
                {item.name.common}
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
