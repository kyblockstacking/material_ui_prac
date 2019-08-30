import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WavesIcon from "@material-ui/icons/Waves";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const HeroImage = require("../assets/hero.jpg");

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "98vh",
    background: `url(${HeroImage})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat"
  },
  backgroundTint: {
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.3)"
  },
  heroTitle: {
    color: "#fff",
    fontSize: "4em",
    position: "absolute",
    top: "30vh",
    left: "10vw",
    fontWeight: "bold",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column"
  },
  iconName: {
    display: "flex",
    alignItems: "center"
  },
  waveIcon: {
    fontSize: "1.5em",
    color: "rgba(0,139,139, 0.7)"
  },
  heroText: {
    marginBottom: "40px",
    fontSize: "0.3em",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.5)",
    textAlign: "start",
    maxWidth: "60%"
  },
  heroCTA: {
    background: "rgb(248,131,121)",
    color: "#fff",
    transition: "transform 0.3s ease",
    "&:hover": {
      background: "	#FCCDC9",
      color: "rgb(248,131,121)",
      transform: "scale(1.3)"
    }
  }
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.backgroundTint}>
        <div className={classes.heroTitle}>
          <div className={classes.iconName}>
            <WavesIcon className={classes.waveIcon} />{" "}
            <Typography className={classes.name} variant="display4">
              KEVIN YANG
            </Typography>
          </div>
          <Typography variant="display3">
            Practice, Material UI, Water
          </Typography>
          <div className={classes.heroText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <Button
            variant="contained"
            size="large"
            className={`${classes.button} ${classes.heroCTA}`}
            href="#schedule-water-break"
          >
            SCHEDULE A WATER BREAK
          </Button>
        </div>
      </div>
    </div>
  );
}
