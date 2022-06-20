import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import WatchIcon from "../../images/watch_icon.svg";
import StarIcon from "../../images/star_icon.svg";
import ForkIcon from "../../images/fork_icon.svg";

interface GithubItemInterface {
  repo: {
    title: string;
    description: string;
    watch_count: number;
    star_count: number;
    fork_count: number;
  };
}

const useStyles = makeStyles((theme) => {
  return {
    repoContainer: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(2),
      height: "100%",
      borderRadius: 10,
    },
    icon: {
      width: "25%",
    },
    iconText: {
      fontSize: "60%",
      marginLeft: theme.spacing(0.5),
    },
    description: {
      fontSize: "70%",
    },
  };
});

const GithubItem = ({ repo }: GithubItemInterface) => {
  const classes = useStyles();
  return (
    <Paper elevation={10} className={classes.repoContainer}>
      <Grid container justify="flex-end">
        <Grid item>
          <Grid container item>
            <img src={WatchIcon} className={classes.icon} />
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.iconText}
            >
              Watch
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              className={classes.iconText}
            >
              {repo.watch_count}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container item>
            <img src={StarIcon} className={classes.icon} />
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.iconText}
            >
              Star
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              className={classes.iconText}
            >
              {repo.star_count}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container item>
            <img src={ForkIcon} className={classes.icon} />
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.iconText}
            >
              Fork
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              className={classes.iconText}
            >
              {repo.fork_count}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography color="textPrimary" style={{ marginTop: 10 }}>
        {repo.title}
      </Typography>
      <Typography
        color="textSecondary"
        variant="body2"
        className={classes.description}
      >
        {repo.description}
      </Typography>
    </Paper>
  );
};

export default GithubItem;