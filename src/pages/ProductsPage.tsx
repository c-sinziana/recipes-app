import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { AxiosRequestConfig } from "axios";

import useFetchData from "../hooks/useFetchData";
import ProductCard from "../components/product/ProductCard";
import SortProducts from "../components/SortProducts";

export default function ProductsPage() {
  const [sort, setSort] = useState("");

  let productsRequest: AxiosRequestConfig = {
    url: "/products",
    method: "get",
  };

  if (sort === "ascending") {
    productsRequest = {
      url: "/products?sort=asc",
      method: "get",
    };
  } else if (sort === "descending") {
    productsRequest = {
      url: "/products?sort=desc",
      method: "get",
    };
  }

  const [{ data: products, loading, error }] = useFetchData(
    productsRequest,
    true
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2%",
          marginBottom: "1%",
        }}
      >
        <SortProducts setSort={setSort} />
      </Box>
      <Grid
        container
        spacing={6}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "center", md: "center" },
        }}
        alignItems="center"
        marginLeft="1%"
      >
        {products.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </Box>
  );
}
