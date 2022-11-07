import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";

export default function MyCartPage() {
  return (
    <Grid>
      <Box sx={{ marginTop: "2%" }}>
        <Typography variant="h5">
          My cart <TiShoppingCart />
        </Typography>
      </Box>
    </Grid>
  );
}
