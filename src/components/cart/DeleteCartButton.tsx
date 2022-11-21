import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

import ToastAlert from "../ToastAlert";
import useFetchData from "../../hooks/useFetchData";

type DeleteCartProp = {
  id: number;
};

export default function DeleteCartButton
({ id }: DeleteCartProp) {
  const [showAlert, setShowAlert] = useState(false);
  const deleteCartRequest: AxiosRequestConfig = {
    url: `/carts/${id}`,
    method: "delete",
  };

  const [{ data: user, loading, error }, fetchData] = useFetchData(
    deleteCartRequest,
    false
  );

  const deleteCart = () => {
    fetchData();
    if (user) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={() => deleteCart()}>
        Delete cart
      </Button>
      {showAlert && (
        <ToastAlert isTrue={true} message="Cart successfully deleted!" />
      )}
    </>
  );
}
