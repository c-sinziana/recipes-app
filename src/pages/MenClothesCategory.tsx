import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import React from "react";
import useFetchData from "../hooks/useFetchData";

export default function MenClothesCategory() {
  const productsRequest: AxiosRequestConfig = {
    url: `/products/category/men's clothing`,
    method: "get",
  };

  const [{ data: categoryProducts, loading, error }, fetchData] =
    useFetchData(productsRequest);

  return (
    <>
      <Typography variant="h5" sx={{ marginTop: "2%" }}>
        Men's clothing
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
        {categoryProducts.map((categoryProduct: any, index: number) => (
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
