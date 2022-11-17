import React from "react";
import {
  Box,
  Button,
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
import DeleteProduct from "./DeleteProduct";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ProductCard from "./ProductCard";
import { MdAddPhotoAlternate } from "react-icons/md";

export default function ProductsPage() {
  const productsRequest: AxiosRequestConfig = {
    url: `/products`,
    method: "get",
  };

  const navigate = useNavigate();

  const [{ data: products, loading, error }] = useFetchData(
    productsRequest,
    true
  );

  return (
    <Grid
      container
      spacing={6}
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "center", md: "center" },
      }}
      marginTop="2%"
      alignItems="center"
      marginLeft="1%"
    >
      {products.map((product: any) => (
        <ProductCard product={product} />
      ))}
    </Grid>
  );
}
