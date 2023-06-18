import { LogoDev } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <AppBar position="static" sx={{ backgroundColor: "#063970" }}>
        <Toolbar>
          <LogoDev sx={{ fontSize: "53px" }} />
          <Typography variant="h5">Logo</Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto" }}>
            Sign-In
          </Button>
          <Button variant="contained" color="error" sx={{ marginLeft: "5px" }}>
            Log-In
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
