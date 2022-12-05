import React, { useContext } from "react";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  useTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router";
import { ColorModeContext } from "../context/ThemeContext";

import { useShoppingCart } from "../context/ShoppingCartContext";
import AllCategoriesMenu from "../pages/AllCategoriesMenu";
import MenuDrawer from "./Menu";

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const navigate = useNavigate();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ maxWidth: "100%" }}>
        <Toolbar>
          <MenuDrawer />
          <Typography
            variant="h6"
            fontFamily="cursive"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            eShop
          </Typography>
          <Box sx={{ marginLeft: "1%" }}>
            <AllCategoriesMenu />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton size="large" color="inherit" onClick={openCart}>
              <Badge badgeContent={cartQuantity} color="error" />
              <ShoppingCart />
            </IconButton>

            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={() => navigate("/user")}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
