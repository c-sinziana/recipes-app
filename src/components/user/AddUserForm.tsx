import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import useFetchData from "../../hooks/useFetchData";

import { requiredFieldRule } from "../../assets/Validations";
import ToastAlert from "../ToastAlert";

export default function AddUserForm() {
  const [showAlert, setShowAlert] = useState(false);
  const [customUser, setCustomUser] = useState<any>();

  const addUserRequest: AxiosRequestConfig = {
    url: `/users`,
    method: "post",
    data: JSON.stringify(customUser),
  };

  const fetchData = useFetchData(addUserRequest, false)[1];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmission = (data: { [key: string]: string | number }) => {
    setShowAlert(true);
    setCustomUser({
      date: String(data["date"]),
    });
  };

  console.log("Request is: " + JSON.stringify(setCustomUser));

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
              Add new user
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
                  label="Email *"
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
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="Username *"
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
              <Grid item xs={6}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="First name *"
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
              <Grid item xs={6}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="Last name *"
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
              <Grid item xs={6}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="City*"
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
              <Grid item xs={6}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="Number*"
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
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="Street*"
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
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="ZIP code*"
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

              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="Phone*"
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
            <Grid
              item
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="medium"
                sx={{ mt: "3%" }}
                onClick={() => fetchData()}
              >
                Add user
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
      <>
        {showAlert && (
          <ToastAlert isTrue={true} message="User successfully updated" />
        )}
      </>
    </>
  );
}
