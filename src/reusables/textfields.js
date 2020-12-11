import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

const TextBox = (props) => {

    const classes = useStyles();

    return (
        <TextField
            id="filled-basic"
            label={props.label}
            value={props.firstName}
            variant="filled"
            size="small"
            onChange={props.onChange}
            errors={props.errors}
          />
    )
}

export default TextBox;