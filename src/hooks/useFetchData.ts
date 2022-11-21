import React, { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { BASE_URL, REQUEST_TIMEOUT } from "../constants/Configuration";

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = REQUEST_TIMEOUT;

type RequestState = {
  data: { [key: string]: any };
  loading: boolean;
  error: any;
};

const useFetchData = (
  requestConfig: AxiosRequestConfig,
  auto: boolean
): any => {
  const [requestState, setRequestState] = useState<RequestState>({
    data: [],
    loading: false,
    error: null,
  });

  console.log("Request config is: " + JSON.stringify(requestConfig));

  const fetchData = async () => {
    try {
      setRequestState({
        ...requestState,
        loading: true,
      });

      const response: AxiosResponse<any, any> = await axios(requestConfig);

      console.log("Response is: " + JSON.stringify(response));

      setRequestState({
        ...requestState,
        data: response.data,
        loading: false,
      });
    } catch (err) {
      setRequestState({
        ...requestState,
        error: err,
      });
    }
  };

  useEffect(() => {
    const sendRequest = async () => {
      await fetchData();
    };

    if (requestConfig.url && auto === true) {
      sendRequest();
    }
  }, [requestConfig.url, JSON.stringify(requestConfig.data)]);

  return [requestState, fetchData];
};

export default useFetchData;
