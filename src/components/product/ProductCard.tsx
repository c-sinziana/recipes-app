import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

import { useShoppingCart } from "../../context/ShoppingCartContext";
import DeleteProductButton from "./DeleteProductButton";
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
          <Chip
            label={product.price + "" + "$"}
            variant="filled"
            color="success"
            sx={{ width: "40%", marginBottom: "1%" }}
          />
        </CardActionArea>
        <DeleteProductButton id={product.id} />
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
