import { ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

import { useNavigate } from "react-router";
import { useShoppingCart } from "../context/ShoppingCartContext";
import DeleteProduct from "./DeleteProduct";
import ProductEditModal from "./ProductEditModal";

interface ProductCardProps {
  product: {
    id: number;
    image: string;
    description: string;
    title: string;
    price: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { increaseCartQuantity } = useShoppingCart();

  const navigate = useNavigate();
  return (
    <Grid
      key={product.id}
      item
      spacing={3}
      sx={{ width: { sm: "50%", md: "30%", xs: "80%" } }}
      marginLeft="1%"
    >
      <Card
        raised
        key={product.id}
        sx={{
          height: { sm: 600, md: 600, xs: 600 },
          bgcolor: "lightgrey",
        }}
      >
        <CardActionArea onClick={() => navigate(`/product/${product.id}`)}>
          <CardMedia
            component="img"
            image={product.image}
            alt="no image"
            sx={{
              height: 350,
              width: "100%",
              marginTop: "1%",
              objectFit: "contain",
            }}
          />
          <Typography variant="h5">{product.title}</Typography>
          <Typography>Price: {product.price} $</Typography>
        </CardActionArea>
        <DeleteProduct id={product.id} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <IconButton onClick={() => increaseCartQuantity(product.id)}>
            <ShoppingCart color="primary" />
          </IconButton>
          <IconButton>
            <ProductEditModal id={product.id} />
          </IconButton>
        </Box>
      </Card>
    </Grid>
  );
}
