import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import useFetchData from "../hooks/useFetchData";
import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import DeleteProduct from "../product/DeleteProduct";
import ProductCard from "../product/ProductCard";

export default function CategoryProducts() {
  const [searchParams] = useSearchParams();
  const categoryName: string | null = searchParams.get("category");

  console.log("Category name is: " + categoryName);

  const productsRequest: AxiosRequestConfig = {
    url: `/products/category/${categoryName}`,
    method: "get",
  };

  const [{ data: categoryProducts, loading, error }] = useFetchData(
    productsRequest,
    true
  );

  return (
    <>
      <Typography variant="h5" sx={{ marginTop: "2%" }}>
        {categoryName?.toUpperCase()}
      </Typography>
      <Grid
        container
        spacing={6}
        sx={{
          flexDirection: { sm: "row", md: "row", xs: "column" },
        }}
        marginTop="2%"
        marginLeft="1%"
      >
        {categoryProducts.map((categoryProduct: any) => (
          <ProductCard product={categoryProduct} />
        ))}
      </Grid>
    </>
  );
}
