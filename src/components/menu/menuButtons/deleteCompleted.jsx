import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { useTasks } from "contexts/tasksContext";
import { DeleteCompletedTasksButton } from "components/menu/buttonsStyles/buttonsStyle";
import { GenericMenuButton } from "./genericMenuButton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  deleteButton: {
    color: "red",
    backgroundColor: 'red',
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },
});

const DeleteCompletedTasks = () => {
  const { setTasks } = useTasks();

  const classes = useStyles();

  const deleteAllCompletedTasksFromTasksList = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.completed === false)
    );
  };

  return (
    <GenericMenuButton
      buttonClass={classes.deleteButton}
      startIcon={<DeleteIcon />}
      onclick={deleteAllCompletedTasksFromTasksList}
    >
      Delete completed tasks
    </GenericMenuButton>
    // <DeleteCompletedTasksButton
    //   text="Delete completed tasks"
    //   startIcon={<DeleteIcon />}
    //   onClick={deleteAllCompletedTasksFromTasksList}
    // />

    // <DeleteCompletedTasksButton
    //   variant="outlined"
    //   startIcon={<DeleteIcon />}
    //   onClick={deleteAllCompletedTasksFromTasksList}
    // >
    //   Delete completed tasks
    // </DeleteCompletedTasksButton>

    // <DeleteCompletedTasksButton
    //   variant="outlined"
    //   startIcon={<DeleteIcon />}
    //   onClick={() => deleteAllCompletedTasksFromTasksList()}
    // />
  );
};

export default DeleteCompletedTasks;
