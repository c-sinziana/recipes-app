import { Button } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import SingleProductPage from "../pages/SingleProductPage";

export default function DeleteProduct() {
  const [isResponseSuccesful, setIsResponseSuccessful] = useState<
    boolean | undefined
  >();

  const productsRequest: AxiosRequestConfig = {
    url: `/products/${6}`,
    method: "delete",
  };

  const {
    response: { data: product, loading, error },
    fetch,
  } = useFetchData(productsRequest);

  return <></>;
}
