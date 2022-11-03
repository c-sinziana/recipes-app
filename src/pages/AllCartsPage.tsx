import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import useFetchData from "../hooks/useFetchData";
import { trimDate } from "../assets/Utils";

export default function AllCartsPage() {
  const cartsRequest: AxiosRequestConfig = {
    url: `/carts`,
    method: "get",
  };

  const { data: carts, loading, error } = useFetchData(cartsRequest);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="5%"
      >
        {carts.map((cart: any) => (
          <Card raised sx={{ width: 500 }}>
            <Box
              sx={{
                flexDirection: "column",
                display: "flex",
              }}
            >
              <Typography>Order date: {trimDate(cart.date)}</Typography>
              <Typography>{cart.userId}</Typography>
              <Typography>{cart.productId}</Typography>
              <Typography>{cart.quantity}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}
