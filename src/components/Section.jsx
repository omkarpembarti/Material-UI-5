import { Container, Paper, Typography } from "@mui/material";
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
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, 3000);
    console.log(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}>
        {products.length == 0 ? (
          <h2>Loading...</h2>
        ) : (
          products.map((product) => {
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
          })
        )}
      </Container>
    </>
  );
};

export default Section;
