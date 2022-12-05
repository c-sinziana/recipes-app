import React, { useState } from "react";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import { AxiosRequestConfig } from "axios";

import ToastAlert from "../ToastAlert";
import useFetchData from "../../hooks/useFetchData";

type ProfileEditProp = {
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

export default function ProfileEditModal({ id }: ProfileEditProp) {
  const [showAlert, setShowAlert] = useState(false);
  const [editProfile, setEditProfile] = useState<any>();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editProfileRequest: AxiosRequestConfig = {
    url: `/users/${id}`,
    method: "put",
    data: JSON.stringify(editProfile),
  };

  const fetchData = useFetchData(editProfileRequest, false)[1];

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Edit user
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={style}
          marginTop="2%"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Typography>Edit user:</Typography>

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
          <Button
            variant="contained"
            color="error"
            sx={{ marginBottom: "3%" }}
            onClick={() => fetchData(editProfileRequest)}
          >
            Submit
          </Button>
        </Box>
      </Modal>

      {showAlert && (
        <ToastAlert isTrue={true} message="Profile updated successfully" />
      )}
    </div>
  );
}
