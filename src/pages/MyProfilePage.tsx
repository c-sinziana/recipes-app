import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import React from "react";
import useFetchData from "../hooks/useFetchData";
import { GrEdit } from "react-icons/gr";
import ProfileEditModal from "../components/ProfileEditModal";

export default function MyProfilePage() {
  const userRequest: AxiosRequestConfig = {
    url: `/users/${1}`,
    method: "get",
  };

  const { data: user, loading, error } = useFetchData(userRequest);

  return (
    <Box>
      <Typography variant="h6" sx={{ marginTop: "3%", marginBottom: "2%" }}>
        My profile <GrEdit />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card raised sx={{ width: 500 }}>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
            }}
          >
            <Typography>
              Name:
              {user.name?.firstname} {user.name?.lastname}
            </Typography>
            <Typography>Username: {user.username}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProfileEditModal />

              <Button
                color="error"
                variant="contained"
                size="small"
                sx={{ marginLeft: "1%" }}
              >
                Delete profile
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
