import React from "react";
import HideSourceIcon from "@mui/icons-material/HideSource";

import { useTasks } from "../../../contexts/tasksContext";
import { HideCompletedTasksButton } from "../buttonsStyles/buttonsStyle";

const HideCompletedTasks = () => {
  const { setTasks } = useTasks();

  const hideCompletedTasksFromList = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.completed ? { ...task, canShow: false } : task
      )
    );
  };

  return (
    <HideCompletedTasksButton
      variant="outlined"
      startIcon={<HideSourceIcon />}
      onClick={() => hideCompletedTasksFromList()}
    >
      Hide completed tasks
    </HideCompletedTasksButton>
  );
};

export default HideCompletedTasks;
