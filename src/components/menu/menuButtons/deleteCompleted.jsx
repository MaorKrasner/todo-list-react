import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { useTasks } from "../../../contexts/tasksContext";
import { DeleteCompletedTasksButton } from "../buttonsStyles/buttonsStyle";

const DeleteCompletedTasks = () => {
  const { setTasks } = useTasks();

  const deleteAllCompletedTasksFromTasksList = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.completed === false)
    );
  };

  return (
    <DeleteCompletedTasksButton
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={() => deleteAllCompletedTasksFromTasksList()}
    >
      Delete completed tasks
    </DeleteCompletedTasksButton>
  );
};

export default DeleteCompletedTasks;
