import { Alert, Button } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";

type DeleteUserProp = {
  id: number;
};

export default function DeleteUser({ id }: DeleteUserProp) {
  const [showAlert, setShowAlert] = useState(false);
  const deleteUserRequest: AxiosRequestConfig = {
    url: `/users/${id}`,
    method: "delete",
  };

  const fetchData = useFetchData(deleteUserRequest, false)[1];

  return (
    <>
      <Button variant="contained" onClick={() => fetchData()}>
        Delete user
      </Button>
      {showAlert && <Alert>User successfully deleted!</Alert>}
    </>
  );
}
