import React, { useState } from "react";
import { Button } from "@mui/material";
import { AxiosRequestConfig } from "axios";

import ToastAlert from "../ToastAlert";
import useFetchData from "../../hooks/useFetchData";

type DeleteProductProp = {
  id: number;
};

export default function DeleteProductButton({ id }: DeleteProductProp) {
  const [showAlert, setShowAlert] = useState(false);
  const deleteProductRequest: AxiosRequestConfig = {
    url: `/products/${id}`,
    method: "delete",
  };

  console.log("Product deleted item is: " + id);

  const [{ data: user, loading, error }, fetchData] = useFetchData(
    deleteProductRequest,
    false
  );

  const deleteProduct = () => {
    fetchData();
    if (user) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={() => deleteProduct()}>
        Delete product
      </Button>
      {showAlert && (
        <ToastAlert isTrue={true} message="Product successfully deleted" />
      )}
    </>
  );
}
