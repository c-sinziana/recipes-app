import  React, { useState } from "react";
import { Button, IconButton, Modal, Box, Typography, TextField } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import { TiPen } from "react-icons/ti";

import useFetchData from "../../hooks/useFetchData";

type ProductEditProp = {
  id: number;
};

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

export default function ProductEditModal({ id }: ProductEditProp) {
  const [editProduct, setEditProduct] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editProductRequest: AxiosRequestConfig = {
    url: `/products/${id}`,
    method: "put",
    data: JSON.stringify(editProduct),
  };

  const fetchData = useFetchData(editProductRequest, false)[1];

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
          <TextField
            type="image"
            fullWidth
            autoFocus
            label="Image URL*"
            sx={{ marginTop: "5%" }}
          />
          <TextField
            type="category"
            fullWidth
            autoFocus
            label="Category*"
            sx={{ marginTop: "5%" }}
          />
          <Button
            variant="contained"
            color="error"
            onClick={() => fetchData(editProductRequest)}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
