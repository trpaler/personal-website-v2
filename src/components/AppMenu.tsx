import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import Logo from "../images/logo.svg";
import MenuBubble from "../images/menu_bubble.svg";
import { MENU_BUBBLE_HEIGHT, MENU_ICON_HEIGHT } from "../constants/AppMenu";

const useStyles = makeStyles((theme) => {
  return {
    menuContainer: {
      display: "flex",
    },
    menuIcon: {
      height: MENU_ICON_HEIGHT,
      marginRight: theme.spacing(4),
    },
    menuItem: {
      cursor: "pointer",
      marginRight: theme.spacing(4),
      "&:hover": {
        opacity: 0.8,
      },
    },
    menuBubbleContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    menuBubble: {
      height: MENU_BUBBLE_HEIGHT,
    },
  };
});

const AppMenu = () => {
  const classes = useStyles();

  const scroll = (elementId: string) => {
    document
      ?.querySelector(`#${elementId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar style={{ margin: 0, padding: 0 }}>
        <Grid container id="home-scrollpoint">
          <Grid
            item
            sm={6}
            className={classes.menuContainer}
            alignItems="center"
            justify="center"
          >
            <img src={Logo} className={classes.menuIcon} />
            <Typography
              align="left"
              className={classes.menuItem}
              color="textSecondary"
              onClick={() => scroll("home-scrollpoint")}
            >
              Home
            </Typography>
            <Typography
              className={classes.menuItem}
              color="textSecondary"
              onClick={() => scroll("projects-scrollpoint")}
            >
              Projects
            </Typography>
            <Typography
              className={classes.menuItem}
              color="textSecondary"
              onClick={() => scroll("accomplishments-scrollpoint")}
            >
              Accomplishments
            </Typography>
            <Typography
              className={classes.menuItem}
              color="textSecondary"
              onClick={() => scroll("github-scrollpoint")}
            >
              Github
            </Typography>
            <Typography
              className={classes.menuItem}
              color="textSecondary"
              onClick={() => scroll("feedback-scrollpoint")}
            >
              Feedback
            </Typography>
          </Grid>
          <Grid item sm={6} className={classes.menuBubbleContainer}>
            <img src={MenuBubble} className={classes.menuBubble}></img>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppMenu;