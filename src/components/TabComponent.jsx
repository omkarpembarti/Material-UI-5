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
        textColor="primary"
        indicatorColor="primary"
        onChange={(e, value) => {
          console.log("TABS");
          setValue(value);
        }}>
        <Tab label="Home" />
        <Tab label="Contact" />
        <Tab label="Career" />
      </Tabs>
    </>
  );
};

export default TabComponent;
