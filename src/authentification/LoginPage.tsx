import React, { useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import {
  emailFieldRule,
  passwordFieldRule,
  phoneFieldRule,
  requiredFieldRule,
} from "../assets/Validations";

export default function LoginPage() {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmission = () => {
    setShowAlert(true);
    navigate("/boardgames");
  };

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
              Login
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
                  error={!!errors["email"]}
                  helperText={
                    errors["email"]?.message !== undefined &&
                    String(errors["email"]?.message)
                  }
                  {...register("email", {
                    ...requiredFieldRule,
                    ...emailFieldRule,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  fullWidth
                  autoFocus
                  label="Password *"
                  error={!!errors["password"]}
                  helperText={
                    errors["password"]?.message !== undefined &&
                    String(errors["password"]?.message)
                  }
                  {...register("password", {
                    ...requiredFieldRule,
                    ...passwordFieldRule,
                  })}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="medium"
              sx={{ mt: "3%" }}
            >
              Login
            </Button>
          </Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={"/register"}>Create an account!</Link>
            </Grid>
          </Grid>
        </Container>
      </form>
      {showAlert && <Alert>Form submitted successfully!</Alert>}
    </>
  );
}
