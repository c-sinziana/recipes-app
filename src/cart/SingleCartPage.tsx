import * as React from "react";

import { AxiosRequestConfig } from "axios";
import useFetchData from "../hooks/useFetchData";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Grid } from "@mui/material";

export default function SingleCartPage() {
  const cartRequest: AxiosRequestConfig = {
    url: `/carts/${5}`,
    method: "get",
  };

  const { data: cart, loading, error } = useFetchData(cartRequest);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="2%"
    >
      <Typography variant="h5"> All my orders</Typography>
      <Card sx={{ maxWidth: "sm", bgcolor: "lightblue" }}>
        <Grid>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {cart.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cart.products?.quantity}
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Box>
  );
}
