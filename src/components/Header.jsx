/* eslint-disable react/prop-types */
import { LogoDev } from "@mui/icons-material";
import { AppBar, Button, Switch, Toolbar, Typography } from "@mui/material";
import { Fragment } from "react";
import TabComponent from "./TabComponent";

const Header = (props) => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <LogoDev sx={{ fontSize: "53px" }} />
          <Typography variant="h5">Community</Typography>
          <TabComponent />

          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto" }}
            disableRipple
            disableElevation>
            Sign-In
          </Button>
          <Button variant="contained" color="error" sx={{ marginLeft: "5px" }}>
            Log-In
          </Button>
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
