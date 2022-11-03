import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { BiBookmarkHeart } from "react-icons/bi";

export default function WishlistPage() {
  return (
    <Box
      sx={{
        marginTop: "2%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5">
        My wishlist <BiBookmarkHeart />
      </Typography>
    </Box>
  );
}
