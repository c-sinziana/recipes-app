import React, { useState } from "react";
import { Button } from "@mui/material";
import { AxiosRequestConfig } from "axios";

import ToastAlert from "../ToastAlert";
import useFetchData from "../../hooks/useFetchData";

type DeleteUserProp = {
  id: number;
};

export default function DeleteUserButton({ id }: DeleteUserProp) {
  const [showAlert, setShowAlert] = useState(false);

  const deleteUserRequest: AxiosRequestConfig = {
    url: `/users/${id}`,
    method: "delete",
  };

  const [{ data: user, loading, error }, fetchData] = useFetchData(
    deleteUserRequest,
    false
  );

  const deleteUser = () => {
    fetchData();
    if (user) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={() => deleteUser()}>
        Delete user
      </Button>
      {showAlert && (
        <ToastAlert isTrue={true} message="Profile successfully deleted" />
      )}
    </>
  );
}
