import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField } from "@mui/material";
import { TiPen } from "react-icons/ti";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductEditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <IconButton size="large" color="inherit">
          <TiPen />
        </IconButton>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={style}
          marginTop="2%"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Typography>Edit product:</Typography>

          <TextField
            type="name"
            fullWidth
            autoFocus
            label="Name*"
            sx={{ marginTop: "5%" }}
          />
          <TextField
            type="description"
            fullWidth
            autoFocus
            label="Description*"
            sx={{ marginTop: "5%" }}
          />
          <TextField
            type="price"
            fullWidth
            autoFocus
            label="Price*"
            sx={{ marginTop: "5%" }}
          />
        </Box>
      </Modal>
    </div>
  );
}
