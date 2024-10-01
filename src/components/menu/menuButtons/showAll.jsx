import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BaseButton from "components/menu/menuButtons/genericMenuButton";
import { useTasks } from "contexts/tasksContext";
import { makeStyles } from "@material-ui/core/styles";

const useButtonStyles = makeStyles({
  showButton: {
    color: "green",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
});

const ShowAllTasks = () => {
  const { setTasks } = useTasks();
  const buttonClasses = useButtonStyles();

  const showAllTasks = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({ ...task, canShow: true }))
    );
  };

  return (
    <BaseButton
      startIcon={<VisibilityIcon />}
      onClick={showAllTasks}
      variantClassName={buttonClasses.showButton}
    >
      Show all tasks
    </BaseButton>
  );
};

export default ShowAllTasks;
