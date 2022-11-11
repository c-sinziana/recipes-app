import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { AxiosRequestConfig } from "axios";
import React from "react";
import useFetchData from "../hooks/useFetchData";

type CartProductProp = {
  productId: number;
  quantity: number;
};

export default function CartProduct({ productId, quantity }: CartProductProp) {
  const productRequest: AxiosRequestConfig = {
    url: `/products/${productId}`,
    method: "get",
  };

  const [{ data: product, loading, error }] = useFetchData(
    productRequest,
    true
  );

  return (
    <Box
      display="flex"
      sx={{
        flexDirection: { sm: "row", md: "row", xs: "column" },
        marginTop: "3%",
        justifyContent: "center",
        height: "23rem",
      }}
    >
      <Card
        raised
        sx={{
          maxWidth: "md",
          bgcolor: "lightgray",
          alignItems: "center",
          marginTop: "2%",
        }}
      >
        <Box
          sx={{ flexDirection: { sm: "row", md: "row", xs: "column" } }}
          display="flex"
        >
          <Box display="flex" flexDirection="column">
            <CardMedia
              component="img"
              image={product.image}
              alt="no image"
              sx={{
                width: { sm: "10rem", md: "10rem", xs: "8rem" },
                height: "13rem",
                objectFit: "contain",
                marginTop: "1%",
                marginLeft: { xs: "5%" },
              }}
            />
            <Typography>{product.title}</Typography>
            <Box flexDirection="row" display="flex" justifyContent="center">
              <Chip label={product.price} variant="filled" color="success" /> $
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alingItems: "center",
              marginTop: { sm: "5%", md: "5%" },
            }}
          >
            <CardContent>
              <Typography variant="h6" color="text.primary">
                {product.description}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
