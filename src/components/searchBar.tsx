import { FC, SetStateAction, Dispatch, useCallback, ChangeEvent } from "react";
import { Box, TextField, Autocomplete, InputAdornment } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import { styled } from "@mui/material/styles";
import { ICountry } from "../types/index";

const customizeStyle = {
  "& label.Mui-focused": {
    color: " transparent",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "transparent",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
};

const SearchCountry = styled(TextField)(customizeStyle);

const SearchRegion = styled(Autocomplete)(customizeStyle);

interface ISearchBarProps {
  countryList: ICountry[];
  criteriaDispatch: Dispatch<
    SetStateAction<{ country?: string; region?: string }>
  >;
}

let timer: NodeJS.Timeout;

export const SearchBar: FC<ISearchBarProps> = (props) => {
  const handleRegionChange = useCallback(
    (_event, value) => {
      props.criteriaDispatch((prev) => ({
        ...prev,
        region: !!value ? value.region : "",
      }));
    },
    [props.criteriaDispatch]
  );

  const handleCountryInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        const country: string = event.target.value ?? "";
        props.criteriaDispatch((prev) => ({ ...prev, country }));
      }, 300);
    },
    []
  );

  const regionList = Array.from(
    new Set(props.countryList.map((item) => item.region))
  ).map((region) => ({ label: region, region }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <SearchCountry
        sx={{
          width: 480,
          backgroundColor: "background.paper",
          outline: "none",
        }}
        placeholder="Search for a country..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleCountryInput}
      />
      <SearchRegion
        disablePortal
        options={regionList}
        sx={{ width: 200, backgroundColor: "background.paper" }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Filter By Region" />
        )}
        onChange={handleRegionChange}
      />
    </Box>
  );
};
