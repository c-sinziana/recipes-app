import React from "react";
import { AxiosRequestConfig } from "axios";
import { Box, Typography, Card, Grid, CardContent } from "@mui/material";

import useFetchData from "../hooks/useFetchData";

export default function SingleCartPage() {
  const cartRequest: AxiosRequestConfig = {
    url: `/carts/${5}`,
    method: "get",
  };

  const [{ data: cart, loading, error }] = useFetchData(cartRequest, true);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="2%"
    >
      <Typography variant="h5"> All my orders</Typography>
      <Card sx={{ maxWidth: "sm", bgcolor: "lightblue" }}>
        <Grid>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {cart.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cart.products?.quantity}
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Box>
  );
}
