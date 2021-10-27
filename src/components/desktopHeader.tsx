import { FC, useContext, useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { AppContext } from "../../pages/_app";

const contentWrapperStyle = {
  width: "1280px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "80px",
};

const titleStyle = { fontWeight: "bold", fontSize: "22px" };

export const DesktopHeader: FC = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const handleToggleMode = useCallback(
    () =>
      appDispatch({
        type: "MODE",
        payload: appState.mode === "dark" ? "light" : "dark",
      }),
    [appState.mode]
  );
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Box sx={contentWrapperStyle}>
        <Box sx={titleStyle} component="span">
          Where in the world?
        </Box>
        <Box>
          <IconButton onClick={handleToggleMode}>
            <Brightness4Icon />
          </IconButton>
          Dark Mode
        </Box>
      </Box>
    </Box>
  );
};
