import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Home, Downloading, RotateLeft } from "@mui/icons-material";
import Section from "../components/Section";
import { useReducer } from "react";
import ClassComponent from "../components/ClassComponent";

const HomePage = () => {
  const initialValue = { click: 0 };

  const increment = (state, action) => {
    if (action.type == "increment")
      return { state, ...{ click: state.click + 1 } };
    if (action.type == "decrement")
      return { state, ...{ click: state.click - 1 } };
  };
  const [state, dispatch] = useReducer(increment, initialValue);

  return (
    <div>
      <ClassComponent></ClassComponent>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          dispatch({ type: "increment" });
        }}>
        Increment
      </Button>
      <Typography component="span">{state.click}</Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}>
        Decrement
      </Button>
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
        <Typography variant="h1" component="div">
          I am N
        </Typography>
        <Typography variant="body1">I am M</Typography>
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
      <Section></Section>
      <>
        <Container maxWidth="xs" sx={{ backgroundColor: "lightblue" }}>
          <h2>Omkar- This is maxWidth=xs</h2>
        </Container>
        <Container maxWidth="md" sx={{ backgroundColor: "lightblue" }}>
          <h2>Omkar- This is maxWidth=md</h2>
        </Container>
        <Container maxWidth="lg" sx={{ backgroundColor: "lightblue" }}>
          <h2>Omkar- This is maxWidth=lg</h2>
        </Container>
        <Container maxWidth="xl" sx={{ backgroundColor: "lightblue" }}>
          <h2>Omkar- This is maxWidth=xl</h2>
        </Container>
        <Container fixed sx={{ backgroundColor: "lightblue" }}>
          <h2>Omkar- This is FIXED</h2>
        </Container>
      </>
    </div>
  );
};

export default HomePage;
