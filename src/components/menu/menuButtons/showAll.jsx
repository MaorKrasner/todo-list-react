import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useTasks } from "contexts/tasksContext";
import { ShowAllTasksButton } from "components/menu/buttonsStyles/buttonsStyle";

const ShowAllTasks = () => {
  const { setTasks } = useTasks();

  const showAllTasks = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task = { ...task, canShow: true }))
    );
  };

  return (
    // <ShowAllTasksButton
    //   text="Show all tasks"
    //   startIcon={<VisibilityIcon />}
    //   onClick={showAllTasks}
    // />
    <ShowAllTasksButton
      variant="outlined"
      startIcon={<VisibilityIcon />}
      onClick={showAllTasks}
    >
      Show all tasks
    </ShowAllTasksButton>

    // <ShowAllTasksButton
    //   variant="outlined"
    //   startIcon={<VisibilityIcon />}
    //   onClick={() => showAllTasks()}
    // />
  );
};

export default ShowAllTasks;
