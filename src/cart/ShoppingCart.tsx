import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Button, Divider, Drawer, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { AxiosRequestConfig } from "axios";
import useFetchData from "../hooks/useFetchData";

const ShoppingCart = () => {
  const { cartProducts } = useShoppingCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [customCart, setCustomCart] = useState<any>();

  const addOrderRequest: AxiosRequestConfig = {
    url: `/carts`,
    method: "post",
    data: JSON.stringify(customCart),
  };

  const fetchData = useFetchData(addOrderRequest, false)[1];

  const handleFormSubmission = (data: { [key: string]: string | number }) => {
    setShowAlert(true);
    setCustomCart({
      date: String(data["date"]),
    });
  };

  console.log("Request is: " + JSON.stringify(setCustomCart));

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <AiOutlineShoppingCart />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AiOutlineShoppingCart size="5rem" />
          <Typography variant="h5">My cart</Typography>
        </Box>
        <Divider />
        <Box p={2} width=" 270" textAlign="center">
          <Paper sx={{ width: 400 }}>
            <Box
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {cartProducts.map((product) => (
                <CartItem key={product.id} {...product} />
              ))}
            </Box>
            {cartProducts.length > 0 && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => fetchData(addOrderRequest)}
                sx={{ marginTop: "1%" }}
              >
                Submit
              </Button>
            )}
          </Paper>
        </Box>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
