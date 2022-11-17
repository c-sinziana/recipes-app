import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AxiosRequestConfig } from "axios";
import useFetchData from "../hooks/useFetchData";
import { useForm } from "react-hook-form";
import {
  requiredFieldRule,
  titleFieldRule,
  urlFieldRule,
} from "../assets/Validations";

export default function AddCart() {
  const [showAlert, setShowAlert] = useState(false);
  const [customCart, setCustomCart] = useState<any>();

  const addOrderRequest: AxiosRequestConfig = {
    url: `/carts`,
    method: "post",
    data: JSON.stringify(customCart),
  };

  const fetchData = useFetchData(addOrderRequest, false)[1];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmission = (data: { [key: string]: string | number }) => {
    setShowAlert(true);
    setCustomCart({
      date: String(data["date"]),
    });
  };

  console.log("Request is: " + JSON.stringify(setCustomCart));

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmission)}>
        <Container maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Typography
              variant="h5"
              marginTop={{ xs: "5%", sm: "3%", md: "3%" }}
            >
              Place new order
            </Typography>
            <Grid
              container
              spacing={2}
              marginTop={{ xs: "10%", md: "5%", sm: "5%" }}
            >
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="Date *"
                  error={!!errors["requiered"]}
                  helperText={
                    errors["requiered"]?.message !== undefined &&
                    String(errors["requiered"]?.message)
                  }
                  {...register("requiered", {
                    ...requiredFieldRule,
                  })}
                />
              </Grid>
            </Grid>
          </Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="medium"
                sx={{ mt: "3%" }}
                onClick={() => fetchData(addOrderRequest)}
              >
                Add order
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
      {showAlert && <Alert>Form submitted successfully!</Alert>}
    </>
  );
}
