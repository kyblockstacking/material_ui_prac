import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

// import wave from "../assets/wave.png";
const wave = require("../assets/wave.png");

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(26, 2),
    marginTop: "-150px",
    backgroundImage:
      "linear-gradient(to bottom, #74CCF4, #5ABCD8, #1CA3EC, #2389DA, #0F5E9C)",
    height: "50vh"
  },
  waterText: {
    fontSize: "6em",
    color: "#0F5E9C",
    fontWeight: "bold",
    textShadow:
      "0 0 10px rgb(255, 255, 255), 0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.7), 0 0 70px rgba(255, 255, 255, 0.6), 0 0 80px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.4), 0 0 150px rgba(255, 255, 255, 0.3), 0 0 150px rgba(255, 255, 255, 0.2), 0 0 150px rgba(255, 255, 255, 0.1)"
  },
  wave: {
    width: "120vw",
    height: "100px",
    margin: "-200px 0 0 -30px",
    paddingBottom: "130px"
  },
  waterDef: {
    color: "#fff"
  },
  checkBenefit: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "60px"
  },
  goodBenefits: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    fontSize: "2em"
  },
  badBenefits: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    fontSize: "2em"
  },
  goodCheck: {
    display: "flex",
    alignItems: "center"
  },
  badCheck: {
    display: "flex",
    alignItems: "center"
  },
  greenCheck: {
    color: "#0DB900",
    fontSize: "1.8em"
  },
  redCheck: {
    color: "#AE180F",
    fontSize: "1.6em"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <>
      <img className={classes.wave} src={wave} alt="wave border"></img>
      <Paper className={classes.root}>
        <Typography className={classes.waterText} variant="h5" component="h3">
          Water
        </Typography>
        <Typography component="p">
          <Typography className={classes.waterDef} component="span">
            wa·ter /ˈwôdər,ˈwädər/
          </Typography>
          <br />
          <Typography className={classes.waterDef} component="span">
            a colorless, transparent, odorless liquid that forms the seas,
            lakes, rivers, and rain and is the basis of the fluids of living
            organisms.
          </Typography>
        </Typography>
        <div className={classes.checkBenefit}>
          <div className={classes.goodBenefits}>
            <span className={classes.goodCheck}>
              <CheckIcon className={classes.greenCheck} />
              Healthy
            </span>
            <span className={classes.goodCheck}>
              <CheckIcon className={classes.greenCheck} />
              Gluten-free
            </span>{" "}
            <span className={classes.goodCheck}>
              <CheckIcon className={classes.greenCheck} />
              No Calories
            </span>{" "}
            <span className={classes.goodCheck}>
              <CheckIcon className={classes.greenCheck} />
              Amazing taste
            </span>{" "}
            <span className={classes.goodCheck}>
              <CheckIcon className={classes.greenCheck} />
              Available hot or cold
            </span>{" "}
            <span className={classes.goodCheck}>
              <CheckIcon className={classes.greenCheck} />
              Readily Available
            </span>
          </div>
          <div className={classes.badBenefits}>
            <span className={classes.goodCheck}>
              <NotInterestedIcon className={classes.redCheck} />
              Dehydration
            </span>
            <span className={classes.goodCheck}>
              <NotInterestedIcon className={classes.redCheck} />
              Headaches
            </span>{" "}
            <span className={classes.goodCheck}>
              <NotInterestedIcon className={classes.redCheck} />
              Illness
            </span>{" "}
            <span className={classes.goodCheck}>
              <NotInterestedIcon className={classes.redCheck} />
              Sugar
            </span>
          </div>
        </div>
      </Paper>
    </>
  );
}
