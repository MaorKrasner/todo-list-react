import React from "react";
import HideSourceIcon from "@mui/icons-material/HideSource";
import BaseButton from "components/menu/menuButtons/genericMenuButton";
import { useTasks } from "contexts/tasksContext";
import { makeStyles } from "@material-ui/core/styles";

const useButtonStyles = makeStyles({
  hideButton: {
    color: "black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
});

const HideCompletedTasks = () => {
  const { setTasks } = useTasks();
  const buttonClasses = useButtonStyles();

  const hideCompletedTasksFromList = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.completed ? { ...task, canShow: false } : task
      )
    );
  };

  return (
    <BaseButton
      startIcon={<HideSourceIcon />}
      onClick={hideCompletedTasksFromList}
      variantClassName={buttonClasses.hideButton}
    >
      Hide completed tasks
    </BaseButton>
  );
};

export default HideCompletedTasks;
