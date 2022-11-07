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

export default function AddProduct() {
  const [showAlert, setShowAlert] = useState(false);
  const [customProduct, setCustomProduct] = useState<any>();

  const [title, setTitle] = useState<string>("title");

  const [price, setPrice] = useState<number>();

  const [description, setDescription] = useState<string>("description");

  const [category, setCategory] = useState<string>("category");

  const [image, setImage] = useState<string>("image");

  const addProductRequest: AxiosRequestConfig = {
    url: `/products/`,
    method: "post",
    data: JSON.stringify(customProduct),
  };

  const [{ data: product, loading, error }, fetchData] =
    useFetchData(addProductRequest);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmission = (data: { [key: string]: string | number }) => {
    setShowAlert(true);
    setCustomProduct({
      title: String(data["title"]),
      price: Number(data["price"]),
      description: String(data["description"]),
      image: String(data["image"]),
      category: String(data["category"]),
    });
  };

  console.log("Request is: " + JSON.stringify(setCustomProduct));

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
              Add new product
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
                  label="Title *"
                  error={!!errors["title"]}
                  helperText={
                    errors["title"]?.message !== undefined &&
                    String(errors["title"]?.message)
                  }
                  {...register("title", {
                    ...requiredFieldRule,
                    ...titleFieldRule,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="Description *"
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
                  type="number"
                  fullWidth
                  autoFocus
                  label="Price *"
                  error={!!errors["requiered"]}
                  helperText={
                    errors["price"]?.message !== undefined &&
                    String(errors["price"]?.message)
                  }
                  {...register("price", {
                    ...requiredFieldRule,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="Category *"
                  error={!!errors["requiered"]}
                  helperText={
                    errors["category"]?.message !== undefined &&
                    String(errors["category"]?.message)
                  }
                  {...register("category", {
                    ...requiredFieldRule,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  label="Image *"
                  error={!!errors["requiered"]}
                  helperText={
                    errors["image"]?.message !== undefined &&
                    String(errors["image"]?.message)
                  }
                  {...register("image", {
                    ...requiredFieldRule,
                    ...urlFieldRule,
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
                onClick={() => fetchData(addProductRequest)}
              >
                Add product
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
      {showAlert && <Alert>Form submitted successfully!</Alert>}
    </>
  );
}
