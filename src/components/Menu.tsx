import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Button, Divider, Drawer, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { Navigate, useNavigate } from "react-router-dom";

const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HiOutlineShoppingBag size="5rem" />
        </Box>
        <Divider />
        <Box p={2} width=" 270" textAlign="center">
          <Paper sx={{ width: 300 }}>
            <Box
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{ marginBottom: "3%" }}
                onClick={() => navigate("/stuff")}
              >
                Products
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ marginBottom: "3%" }}
                onClick={() => navigate("/carts")}
              >
                My Orders
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ marginBottom: "3%" }}
                onClick={() => navigate("/login")}
              >
                Sign out
              </Button>
            </Box>
          </Paper>
        </Box>
      </Drawer>
    </>
  );
};

export default Menu;
