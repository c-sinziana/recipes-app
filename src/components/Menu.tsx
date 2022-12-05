import React, { useState } from "react";
import { IconButton, Drawer, Box, Divider, Paper, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router";

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
                onClick={() => navigate("/add-product")}
              >
                Add product
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
                onClick={() => navigate("/users")}
              >
                Users
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ marginBottom: "3%" }}
                onClick={() => navigate("/add-user")}
              >
                Add user
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
