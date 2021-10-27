import { FC } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface ICountryItemProps {
  officialName: string;
  flag: string;
  Population: number;
  Region: string;
  Capital: string;
}

const fieldStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
};

const fieldArray: Array<keyof ICountryItemProps> = [
  "Population",
  "Region",
  "Capital",
];

export const CountryItem: FC<ICountryItemProps> = (props) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        width: 264,
        height: 336,
        backgroundColor: "background.paper",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Image src={props.flag} alt="Country Flag" width={264} height={160} />
      <Box sx={{ padding: "0px 24px" }}>
        <Box
          component="p"
          sx={{
            margin: 0,
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "66px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {props.officialName}
        </Box>
        {fieldArray.map((item, index) => {
          return (
            <Box key={index} sx={fieldStyle}>
              <Box component="span">{item}:</Box>
              &nbsp;
              <Box component="span" sx={{ color: "text.secondary" }}>
                {props[item]}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
