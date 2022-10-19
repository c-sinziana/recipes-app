import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Button, Divider, Drawer, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";

import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <Box p={2} width=" 270" textAlign="center">
          <Paper sx={{ width: 270 }}>
            <ListItemText>Menu:</ListItemText>
            <Divider />
            <MenuList dense>
              <Typography sx={{ ml: 3 }}>
                <Button />
              </Typography>
              <Typography sx={{ ml: 3 }}>
                <Button />
              </Typography>
              <Typography sx={{ ml: 3 }}>
                <Button />
              </Typography>
            </MenuList>
          </Paper>
        </Box>
      </Drawer>
    </>
  );
};

export default Menu;