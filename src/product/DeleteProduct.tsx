import { Button } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import SingleProductPage from "./SingleProductPage";

type DeleteProductProp = {
  id: number;
};

export default function DeleteProduct({ id }: DeleteProductProp) {
  const deleteProductRequest: AxiosRequestConfig = {
    url: `/products/${id}`,
    method: "delete",
  };

  console.log("Product deleted item is: " + id);

  const fetchData = useFetchData(deleteProductRequest, false)[1];

  return (
    <Button variant="contained" onClick={() => fetchData()}>
      Delete product
    </Button>
  );
}
