import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

interface ToastAlertProps {
  isTrue: boolean;
  message: string;
}

export default function ToastAlert({ isTrue, message }: ToastAlertProps) {
  useEffect(() => {
    if (isTrue === true) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  }, []);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000} // magic number
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}
