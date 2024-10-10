import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#E0E0E0",
    color: "green",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    marginLeft: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    height: "40px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
});

const AddTaskButton = ({ onClick }) => {
  const classes = useStyles();

  const openDialog = () => {
    onClick(true);
  };

  return (
    <Button
      onClick={openDialog}
      variant="outlined"
      startIcon={<PlaylistAddIcon />}
      className={classes.button}
    >
      Add task
    </Button>
  );
};

export default AddTaskButton;
