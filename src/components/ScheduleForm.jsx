import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "50vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  },
  howReminder: {
    padding: "40px 10px 10px 10px"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    contactMethod: "",
    name: "hai"
  });

  // const inputLabel = React.useRef(null);
  const [labelWidth] = React.useState(0);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Date && Time"
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
      <span className={classes.howReminder}>
        How do you want to be reminded?
      </span>
      <Select
        native
        value={state.contactMethod}
        onChange={handleChange("contactMethod")}
        input={
          <OutlinedInput
            name="contactMethod"
            labelWidth={labelWidth}
            id="outlined-age-native-simple"
          />
        }
      >
        <option value="" />
        <option value={10}>SMS</option>
        <option value={20}>In-person reminder</option>
        <option value={30}>Water bottle thrown at you</option>
      </Select>
      <Button
        id="schedule-water-break"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Schedule
      </Button>
    </form>
  );
}
