import { Box, CircularProgress } from "@mui/material";
import { FC } from "react";

const loadingWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Loading: FC = () => {
  return (
    <Box sx={loadingWrapperStyle}>
      <CircularProgress />
    </Box>
  );
};
