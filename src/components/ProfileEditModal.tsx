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

export default function ProfileEditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="error">
        Edit profile
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={style}
          marginTop="2%"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Typography>Edit profile:</Typography>

          <TextField
            type="name"
            fullWidth
            autoFocus
            label="Name*"
            sx={{ marginTop: "5%" }}
          />
          <TextField
            type="username"
            fullWidth
            autoFocus
            label="Username*"
            sx={{ marginTop: "5%" }}
          />
          <TextField
            type="email"
            fullWidth
            autoFocus
            label="Email*"
            sx={{ marginTop: "5%" }}
          />
          <TextField
            type="phone"
            fullWidth
            autoFocus 
            label="Phone*"
            sx={{ marginTop: "5%" }}
          />
          <Button variant="contained" color="error" sx={{ marginBottom: "3%" }}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
