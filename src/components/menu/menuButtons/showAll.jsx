import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useTasks } from "contexts/tasksContext";
import { ShowAllTasksButton } from "components/menu/menuButtons/genericMenuButton";

const ShowAllTasks = () => {
  const { setTasks } = useTasks();

  const showAllTasks = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task = { ...task, canShow: true }))
    );
  };

  return (
    <ShowAllTasksButton
      variant="outlined"
      startIcon={<VisibilityIcon />}
      onClick={showAllTasks}
    ></ShowAllTasksButton>
  );
};

export default ShowAllTasks;
