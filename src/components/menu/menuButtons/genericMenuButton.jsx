import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";

const useStyles = makeStyles({
  baseButton: {
    backgroundColor: "#E0E0E0",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    marginLeft: "10px",
    height: "40px",
    textTransform: "none",
    marginTop: "15px",
  },
});

export const GenericMenuButton = ({
  buttonClass,
  onclick,
  children,
  startIcon,
}) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      classes={{ root: "" }}
      className={classNames(classes.baseButton, buttonClass)}
      onClick={onclick}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};
