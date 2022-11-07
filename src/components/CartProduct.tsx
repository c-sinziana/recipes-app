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

  /*
  *
  V1
  const [customProduct, setCustomProduct] = useState();

  const addProductRequest: AxiosRequestConfig = {
    url: `/products/`,
    method: "post",
    data: JSON.stringify(customProduct)
  };

  const [{ data: product, loading, error }, fetchData] =
    useFetchData(productRequest);

   const handleFormSubmission = (data: { [key: string]: string }) => {
    setCustomProduct({name: data["name"], price: data["price"], ...});
  };

  return (
    <Button onClick={() => fetchData()} />
  );

  V2 
  let customProduct = {};

  const addProductRequest: AxiosRequestConfig = {
    url: `/products/`,
    method: "post",
    data: JSON.stringify(customProduct)
  };

  const [{ data: product, loading, error }, fetchData] =
    useFetchData(productRequest);

  const handleFormSubmission = (data: { [key: string]: string }) => {
    customProduct = {name: data["name"], price: data["price"], ...};
    fetchData();
  };
  */

  const [{ data: product, loading, error }] = useFetchData(productRequest);

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
