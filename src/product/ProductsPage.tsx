import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { AxiosRequestConfig } from "axios";

import useFetchData from "../hooks/useFetchData";
import SingleProductPage from "./SingleProductPage";
import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router";

export default function ProductsPage() {
  const productsRequest: AxiosRequestConfig = {
    url: `/products`,
    method: "get",
  };

  const navigate = useNavigate();

  const [{ data: products, loading, error }, fetchData] =
    useFetchData(productsRequest);

  return (
    <Grid
      container
      spacing={6}
      sx={{
        flexDirection: { sm: "row", md: "row", xs: "column" },
      }}
      marginTop="2%"
      marginLeft="1%"
    >
      {products.map((product: any, index: number) => (
        <Grid
          item
          spacing={3}
          sx={{ width: { sm: "50%", md: "30%", xs: "100%" } }}
        >
          <Card
            raised
            sx={{
              height: { sm: "40rem", md: "40rem", xs: "30rem" },
              bgcolor: "lightgrey",
            }}
          >
            <CardActionArea onClick={() => navigate("/product")}>
              <CardMedia
                component="img"
                image={product.image}
                alt="no image"
                sx={{
                  height: 350,
                  width: "100%",
                  marginTop: "5%",
                  objectFit: "contain",
                }}
              />
              <Typography variant="h5">{product.title}</Typography>
              <Typography>Price: {product.price} $</Typography>

              <IconButton size="large" color="inherit">
                <BsHeartFill />
              </IconButton>
              <IconButton size="large" color="inherit">
                <FaShoppingCart />
              </IconButton>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
