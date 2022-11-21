import React from "react";
import { Box, Card, Divider, Typography } from "@mui/material";
import { AxiosRequestConfig } from "axios";

import useFetchData from "../hooks/useFetchData";
import { trimDate } from "../assets/Utils";
import DeleteCartButton from "../components/cart/DeleteCartButton";
import OrderItemCard from "../components/cart/OrderItemCard";

export default function AllCartsPage() {
  const cartsRequest: AxiosRequestConfig = {
    url: `/carts`,
    method: "get",
  };

  const [{ data: carts, loading, error }] = useFetchData(cartsRequest, true);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="5%"
    >
      {carts.map((cart: any) => (
        <Card
          key={cart.id}
          raised
          sx={{
            marginTop: "2%",
            bgcolor: "lightgray",
            width: { sm: 500, md: 800, xs: 400 },
          }}
        >
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
                <OrderItemCard {...product} />
              </Box>
            ))}
          </Box>
          <Divider />
          <DeleteCartButton id={cart.id} />
        </Card>
      ))}
    </Box>
  );
}
