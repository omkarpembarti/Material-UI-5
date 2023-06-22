import { Box, Divider, Paper, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {
  AddShoppingCartOutlined,
  RemoveShoppingCart,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const Section = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    console.log(products);
  }, []);

  return (
    <>
      <Divider variant="fullWidth"></Divider>
      <Typography variant="h5">I am section</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          //   backgroundColor: "lightgray",
          flexWrap: "wrap",
        }}>
        {products.map((product) => {
          return (
            <Paper
              key={product.id}
              elevation={10}
              variant="elevation"
              square={false}
              sx={{
                maxWidth: 345,
              }}>
              <CardActionArea disableRipple>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title.split(" ")[0]}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                    sx={{
                      height: 100, // Set the desired height for the container
                      overflow: "auto", // Enable scrolling
                    }}>
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  startIcon={<AddShoppingCartOutlined />}
                  size="small"
                  variant="contained"
                  color="success"
                  sx={{ marginLeft: "auto" }}>
                  Add
                </Button>
                <Button
                  startIcon={<RemoveShoppingCart />}
                  size="small"
                  variant="contained"
                  color="error">
                  Remove
                </Button>
              </CardActions>
            </Paper>
          );
        })}
      </Box>
    </>
  );
};

export default Section;
