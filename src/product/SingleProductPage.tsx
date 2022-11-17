import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import useFetchData from "../hooks/useFetchData";
import { AxiosRequestConfig } from "axios";
import ProductEditModal from "./ProductEditModal";
import { FaShoppingCart } from "react-icons/fa";
import { useParams, useSearchParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SingleProductPage() {
  const { increaseCartQuantity } = useShoppingCart();
  const params = useParams();

  console.log("My single product id is: " + params.id);

  const productRequest: AxiosRequestConfig = {
    url: `/products/${params.id}`,
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
      }}
    >
      <Card raised sx={{ maxWidth: "md", alignItems: "center" }}>
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
                width: { sm: "100%", md: "100%", xs: "90%" },
                height: "50%",
                objectFit: "contain",
                marginTop: "5%",
                marginLeft: { xs: "5%" },
              }}
            />
            <Typography variant="h6">{product.title}</Typography>
            <Typography>{product.price} $</Typography>
            <Box justifyContent="center" flexDirection="row" display="flex">
              <IconButton size="large" color="primary">
                <FavoriteIcon />
              </IconButton>
              <ProductEditModal id={product.id} />
              <IconButton
                size="large"
                color="primary"
                onClick={() => increaseCartQuantity(product.id)}
              >
                <FaShoppingCart />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alingItems: "center",
              marginTop: { sm: "5%", md: "10%" },
            }}
          >
            <CardContent>
              <Typography variant="h5" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
