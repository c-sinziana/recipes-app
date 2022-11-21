import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Button,
  IconButton,
  Drawer,
  Box,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import { AxiosRequestConfig } from "axios";

import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItemCard from "./CartItemCard";
import useFetchData from "../../hooks/useFetchData";
import ToastAlert from "../ToastAlert";

interface ShoppingCartProps {
  isOpen: boolean;
}

export default function ShoppingCartDrawer({ isOpen }: ShoppingCartProps) {
  const { openCart, closeCart, cartProducts } = useShoppingCart();

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
      <Drawer anchor="right" open={isOpen} onClose={() => closeCart()}>
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
                <CartItemCard key={product.id} {...product} />
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
            {showAlert && (
              <ToastAlert message="Product successfully added" isTrue={true} />
            )}
          </Paper>
        </Box>
      </Drawer>
    </>
  );
}
