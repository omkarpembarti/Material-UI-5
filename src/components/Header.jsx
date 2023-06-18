import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>I am header</Typography>
          <Button variant="contained" color="error" sx={{ marginLeft: "auto" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
