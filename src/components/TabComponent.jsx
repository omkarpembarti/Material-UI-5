// Tabs index start with 0 index

import { useTheme } from "@emotion/react";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import { useState } from "react";

const TabComponent = () => {
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Tabs
        value={value}
        sx={{ margin: "auto", display: isXsScreen ? "block" : "none" }}
        textColor="inherit"
        indicatorColor="primary"
        onChange={(e, value) => {
          console.log("TABS");
          setValue(value);
        }}>
        <Tab label="Home" disableTouchRipple />
        <Tab label="Contact" disableTouchRipple />
        <Tab label="Career" disableTouchRipple />
      </Tabs>
    </>
  );
};

export default TabComponent;
