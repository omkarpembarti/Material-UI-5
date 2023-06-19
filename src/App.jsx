import { Button, Divider, TextField, Typography } from "@mui/material";
import { Home, Downloading, RotateLeft } from "@mui/icons-material";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
        <Typography variant="h3">I am Typography</Typography>
        <Typography variant="h2">I am Typography</Typography>
        <Typography variant="h4" component="div">
          I am Typography
        </Typography>
        <Typography variant="body1">I am Typography</Typography>
      </>
      <Divider />
      <div style={{ margin: "15px" }}>
        <TextField variant="filled" label="Name" placeholder="Name"></TextField>
        <TextField
          variant="outlined"
          label="Surname"
          placeholder="surname"
          required></TextField>
        <TextField variant="standard" label="standard"></TextField>
      </div>
    </>
  );
}

export default App;
