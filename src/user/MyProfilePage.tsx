import { Box, Button, Card, Grid, IconButton, Typography } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import React from "react";
import useFetchData from "../hooks/useFetchData";
import { GrEdit } from "react-icons/gr";
import ProfileEditModal from "./ProfileEditModal";
import DeleteUser from "./DeleteUser";

export default function MyProfilePage() {
  const userRequest: AxiosRequestConfig = {
    url: `/users/${1}`,
    method: "get",
  };

  const [{ data: user, loading, error }, fetchData] = useFetchData(
    userRequest,
    true
  );

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
              <Box sx={{ marginRight: "2%" }}>
                <ProfileEditModal id={user.id} />
              </Box>
              <DeleteUser id={user.id} />
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
