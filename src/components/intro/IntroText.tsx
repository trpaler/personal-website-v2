import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { INTRO_TEXT_MARGIN_TOP } from "../../constants/Intro";

const AppIntroduction = () => {
  return (
    <Container style={{ marginTop: INTRO_TEXT_MARGIN_TOP }}>
      <Grid container justify="center" alignItems="center">
        <Typography color="textSecondary">Hi there! I'm</Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography
          color="textPrimary"
          variant="h2"
          style={{ fontWeight: 600 }}
        >
          Sheen Capadngan
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ marginTop: 15 }}
      >
        <Typography color="textPrimary" variant="body2">
          Full-stack Software Developer & Programming Enthusiast
        </Typography>
      </Grid>
    </Container>
  );
};

export default AppIntroduction;
