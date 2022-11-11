import { Button } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import React from "react";
import useFetchData from "../hooks/useFetchData";

type DeleteCartProp = {
  id: number;
};

export default function DeleteCart({ id }: DeleteCartProp) {
  const deleteCartRequest: AxiosRequestConfig = {
    url: `/carts/${id}`,
    method: "delete",
  };

  const fetchData = useFetchData(deleteCartRequest, false)[1];

  return (
    <Button variant="contained" onClick={() => fetchData()}>
      Delete order
    </Button>
  );
}
