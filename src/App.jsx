/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Container,
  CssBaseline,
  Divider,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Home, Downloading, RotateLeft } from "@mui/icons-material";
import Header from "./components/Header";
import Section from "./components/Section";
import { useState } from "react";

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
        HELLO WORLD🚀
        <Divider />
        <>
          <Button
            sx={{ margin: 2 }}
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<Home />}>
            Home
          </Button>
          <Button
            sx={{ margin: 2 }}
            variant="contained"
            color="success"
            size="medium"
            startIcon={<Downloading />}>
            Upload
          </Button>
          <Button
            sx={{ margin: 2 }}
            variant="outlined"
            color="error"
            size="large"
            startIcon={<RotateLeft />}>
            Reset
          </Button>
        </>
        <Divider />
        <>
          <Typography variant="h4" component="div">
            I am Typography
          </Typography>
          <Typography variant="body1">I am Typography</Typography>
        </>
        <Divider />
        <div style={{ margin: "15px" }}>
          <TextField
            variant="filled"
            label="Name"
            placeholder="Name"></TextField>
          <TextField
            variant="outlined"
            label="Surname"
            placeholder="surname"
            required></TextField>
          <TextField variant="standard" label="standard"></TextField>
        </div>
        <>
          <Container maxWidth="xs" sx={{ backgroundColor: "lightblue" }}>
            <h2>Omkar- This is maxWidth="xs"</h2>
          </Container>
          <Container maxWidth="md" sx={{ backgroundColor: "lightblue" }}>
            <h2>Omkar- This is maxWidth="md"</h2>
          </Container>
          <Container maxWidth="lg" sx={{ backgroundColor: "lightblue" }}>
            <h2>Omkar- This is maxWidth="lg"</h2>
          </Container>
          <Container maxWidth="xl" sx={{ backgroundColor: "lightblue" }}>
            <h2>Omkar- This is maxWidth="xl"</h2>
          </Container>
          <Container fixed sx={{ backgroundColor: "lightblue" }}>
            <h2>Omkar- This is FIXED</h2>
          </Container>
        </>
        <Section></Section>
      </ThemeProvider>
    </>
  );
}

export default App;
