import { FC, useCallback } from "react";
import { Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import { DesktopHeader } from "../../src/components/desktopHeader";
import { useAllCountries } from "../../src/hooks/useAllCountries";
import { Loading } from "../../src/components/loading";
import { DetailContent } from "../../src/components/detailContent";
import { ICountry } from "../../src/types/index";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const detailPageWrapperStyle = {
  fontSize: "16px",
  bgcolor: "background.default",
  height: "100vh",
};

const contentWrapperStyle = {
  margin: "0 auto",
  width: "1280px",
};

const Detail: FC = () => {
  const router = useRouter();
  const handleClickBack = useCallback(() => {
    router.push("/");
  }, [router]);

  const countryCioc = router.query.cioc?.toString() || "";
  const allCountries = useAllCountries();
  const matchedItem = allCountries.find(
    (item) => item.cioc.toLocaleUpperCase() === countryCioc.toLocaleUpperCase()
  );

  let bordersItem: ICountry[] = [];
  if (matchedItem && matchedItem.borders.length) {
    bordersItem = allCountries.filter((item) =>
      matchedItem.borders.includes(item.cioc)
    );
  }

  if (allCountries.length && !matchedItem) {
    router.push("/404");
    return null;
  }

  return (
    <Box sx={detailPageWrapperStyle}>
      <DesktopHeader />
      <Box sx={contentWrapperStyle}>
        <Box sx={{ margin: "75px 0" }}>
          <Button
            onClick={handleClickBack}
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Box>
        {allCountries.length === 0 && <Loading />}
        {!!matchedItem && (
          <Box>
            <DetailContent
              countryItem={matchedItem}
              bordersItem={bordersItem}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Detail;
