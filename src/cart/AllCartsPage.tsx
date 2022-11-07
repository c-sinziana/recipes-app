import React, { useEffect } from "react";
import { Box, Card, Divider, Typography } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import useFetchData from "../hooks/useFetchData";
import { trimDate } from "../assets/Utils";
import CartProduct from "../components/CartProduct";

export default function AllCartsPage() {
  const cartsRequest: AxiosRequestConfig = {
    url: `/carts`,
    method: "get",
  };

  const [{ data: carts, loading, error }, fetchData] =
    useFetchData(cartsRequest);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="5%"
    >
      {carts.map((cart: any) => (
        <Card raised sx={{ width: 1000, marginTop: "2%" }}>
          <Typography variant="h5">Your order</Typography>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">
                Order date: {trimDate(cart.date)}
              </Typography>
            </Box>
            {cart.products.map((product: any) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <CartProduct
                  productId={product.productId}
                  quantity={product.quantity}
                />
              </Box>
            ))}
          </Box>
          <Divider />
        </Card>
      ))}
    </Box>
  );
}
