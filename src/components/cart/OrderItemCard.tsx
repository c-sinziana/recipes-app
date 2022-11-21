import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { AxiosRequestConfig } from "axios";

import useFetchData from "../../hooks/useFetchData";

type OrderItemCardProp = {
  productId: number;
  quantity: number;
};

export default function OrderItemCard({
  productId,
  quantity,
}: OrderItemCardProp) {
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
        height: 300,
      }}
    >
      <Card
        raised
        sx={{
          width: { xs: 200, sm: 400, md: 700 },
          alignItems: "center",
          marginTop: "2%",
        }}
      >
        <Box
          sx={{ flexDirection: { sm: "row", md: "row", xs: "column" } }}
          display="flex"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt="no image"
              sx={{
                width: { sm: 200, md: 200, xs: 100 },
                height: 200,
                objectFit: "contain",
                marginTop: "1%",
                marginLeft: { xs: "5%" },
              }}
            />
            <Chip
              label={product.price + "" + "$"}
              variant="filled"
              color="success"
              sx={{ marginTop: "2%", width: "50%" }}
            />
          </Box>
          <Box
            flexDirection="column"
            display="flex"
            justifyContent="center"
            marginLeft="10%"
          >
            <Typography>{product.title}</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
