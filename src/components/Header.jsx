/* eslint-disable react/prop-types */
import { LogoDev, LoginSharp } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Switch,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Fragment } from "react";
import TabComponent from "./TabComponent";
import { useTheme } from "@emotion/react";

const Header = (props) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Fragment>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: props.mode ? "" : "transparent",
          backgroundImage: props.mode
            ? "none"
            : "linear-gradient(to left, #003399 0%, #ff0000 100%)",
        }}>
        <Toolbar>
          <LogoDev
            sx={{
              fontSize: "53px",
            }}
          />
          <Typography variant="h5">Project</Typography>
          <TabComponent />
          <Box sx={{ marginLeft: "auto" }}>
            {isMediumScreen || (
              <>
                <Button
                  variant="contained"
                  color="success"
                  disableRipple
                  disableElevation>
                  Sign-In
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ marginLeft: "5px" }}>
                  Log-In
                </Button>
              </>
            )}
            {isMediumScreen && (
              <IconButton>
                <LoginSharp color="success" />
              </IconButton>
            )}
          </Box>
          <Switch
            checked={props.mode}
            color="warning"
            onChange={(e) => {
              props.setNightMode(e.target.checked);
            }}
          />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
