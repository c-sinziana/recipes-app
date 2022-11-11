import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import useFetchData from "../hooks/useFetchData";

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
          <Grid
            key={categoryProduct}
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
              <CardMedia
                component="img"
                image={categoryProduct.image}
                alt="no image"
                sx={{
                  height: 350,
                  width: "100%",
                  marginTop: "5%",
                  objectFit: "contain",
                }}
              />
              <Typography variant="h5">{categoryProduct.title}</Typography>
              <Typography> Price: {categoryProduct.price} $</Typography>
              <Typography>{categoryProduct.description}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
