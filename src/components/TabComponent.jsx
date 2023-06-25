// Tabs index start with 0 index

import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const TabComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Tabs
        value={value}
        sx={{ margin: "auto" }}
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
