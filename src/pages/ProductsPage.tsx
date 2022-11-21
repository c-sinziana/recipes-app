import React from "react";
import { Grid } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router";

import useFetchData from "../hooks/useFetchData";
import ProductCard from "../components/product/ProductCard";

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
