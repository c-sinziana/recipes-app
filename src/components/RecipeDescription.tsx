import { CardContent, Grid, Typography } from "@mui/material";
import React from "react";

export default function RecipeDescription() {
  return (
    <Grid>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Grid>
  );
}
