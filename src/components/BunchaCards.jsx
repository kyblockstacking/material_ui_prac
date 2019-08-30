import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./reusable/Card";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2em"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  const water1 = require("../assets/water1.jpg");
  const water2 = require("../assets/water2.jpg");
  const water3 = require("../assets/water3.jpg");

  const description1 = "this is a drop of water hitting more water";
  const description2 = "this is water on a glass window";
  const description3 = "this is a pineapple floating in water";

  return (
    <Container className={classes.cardsContainer} maxWidth="lg">
      <Card image={water1} description={description1} />
      <Card image={water2} description={description2} />
      <Card image={water3} description={description3} />
    </Container>
  );
}
