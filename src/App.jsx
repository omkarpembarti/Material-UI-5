/* eslint-disable react/no-unescaped-entities */
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";

function App() {
  const [themeMode, setNightMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: themeMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setNightMode={setNightMode} mode={themeMode} />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
