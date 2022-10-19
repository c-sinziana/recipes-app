import { Grid } from "@mui/material";
import React, { useState } from "react";
import SingleRecipePage from "./SingleRecipePage";

export default function RecipesPage() {
  const [pageIndex, setPageIndex] = useState<number>();

  let recipes = [
    {
      id: 1,
      image: "string",
      name: "string",
      releaseYear: 9999,
      description: "string",
      price: 1,
      link: "string",
      quantity: 61,
      categoryId: 1,
    },
    {
      id: 6,
      image: null,
      name: "Pandemic",
      releaseYear: 2013,
      description: "PANDEMIC",
      price: 323.29,
      link: "https://boardgamegeek.com/boardgame/30549/pandemic",
      quantity: 34,
      categoryId: 3,
    },
    {
      id: 10,
      image: null,
      name: "The Voyages of Marco Polo Insert",
      releaseYear: 2000,
      description: "THE VOYAGES OF MARCO POLO INSERT",
      price: 380,
      link: "https://boardgamegeek.com/boardgame/30549/pandemic",
      quantity: 71,
      categoryId: 4,
    },
    {
      id: 5,
      image: null,
      name: "Patchwork",
      releaseYear: 2007,
      description: "PATCHWORK",
      price: 585.32,
      link: "https://boardgamegeek.com/boardgame/2243/yahtzee",
      quantity: 12,
      categoryId: 6,
    },
    {
      id: 3,
      image: null,
      name: "Terra Mystica",
      releaseYear: 2005,
      description: "TERRA MYSTICA",
      price: 646.09,
      link: "https://boardgamegeek.com/boardgame/120677/terra-mystica",
      quantity: 23,
      categoryId: 5,
    },
    {
      id: 7,
      image: null,
      name: "Yahtzee",
      releaseYear: 2002,
      description: "YAHTZEE",
      price: 722.56,
      link: "https://boardgamegeek.com/boardgame/120677/terra-mystica",
      quantity: 89,
      categoryId: 2,
    },
    {
      id: 2,
      image: null,
      name: "Azul",
      releaseYear: 2017,
      description: "AZUL",
      price: 733.02,
      link: "https://boardgamegeek.com/boardgame/230802/azul",
      quantity: 89,
      categoryId: 5,
    },
    {
      id: 9,
      image: null,
      name: "Warhammer 40K Collection",
      releaseYear: 2001,
      description: "WARHAMMER 40K COLLECTION",
      price: 905.93,
      link: "https://boardgamegeek.com/boardgame/171623/voyages-marco-polo",
      quantity: 65,
      categoryId: 6,
    },
    {
      id: 4,
      image: null,
      name: "BANG!",
      releaseYear: 2002,
      description: "BANG!",
      price: 925.4,
      link: "https://boardgamegeek.com/boardgame/163412/patchwork",
      quantity: 44,
      categoryId: 8,
    },
    {
      id: 8,
      image: null,
      name: "The Voyages of Marco Polo",
      releaseYear: 2010,
      description: "THE VOYAGES OF MARCO POLO",
      price: 1041.03,
      link: "https://boardgamegeek.com/boardgame/120677/terra-mystica",
      quantity: 60,
      categoryId: 7,
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      {recipes.map((recipe: any, index: number) => (
        <Grid item xs={3} key={index}></Grid>
      ))}
    </Grid>
  );
}
