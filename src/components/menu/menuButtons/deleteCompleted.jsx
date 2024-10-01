import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import BaseButton from "components/menu/menuButtons/genericMenuButton";
import { useTasks } from "contexts/tasksContext";
import { makeStyles } from "@material-ui/core/styles";

const useButtonStyles = makeStyles({
  deleteButton: {
    color: "red",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },
});

const DeleteCompletedTasks = () => {
  const { setTasks } = useTasks();
  const buttonClasses = useButtonStyles();

  const deleteAllCompletedTasksFromTasksList = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.completed === false)
    );
  };

  return (
    <BaseButton
      startIcon={<DeleteIcon />}
      onClick={deleteAllCompletedTasksFromTasksList}
      variantClassName={buttonClasses.deleteButton}
    >
      Delete completed tasks
    </BaseButton>
  );
};

export default DeleteCompletedTasks;
