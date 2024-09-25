import _ from "lodash";
import { Box } from "@mui/material";
import React, { useState } from "react";

import Menu from "components/menu/menu";
import ToDoIcon from "components/icons/todoIcon";
import TaskDialog from "components/dialog/dialog";
import { useTasks } from "contexts/tasksContext";
import AddTaskButton from "components/input/addTask";
import SearchTaskFilter from "components/search/searchFilter";
import TaskRepresentation from "components/tasksManagement/taskRepresentation";

const App = () => {
  const { tasks, setTasks } = useTasks();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setTaskToEdit({});
    setIsDialogOpen(false);
  };

  const handleNewTaskInsertion = (
    taskName,
    subject,
    priority,
    executionDate,
    taskIndex
  ) => {
    const stringedDate = executionDate.toLocaleDateString("en-GB");
    setTasks((prev) => [
      ...prev,
      {
        taskIndex,
        text: taskName,
        subject,
        priority,
        executionDate: stringedDate,
        completed: false,
        canShow: true,
      },
    ]);

    setTaskToEdit({});
  };

  const handleTaskSaving = (taskName, subject, priority, executionDate) => {
    const stringedDate = executionDate.toLocaleDateString("en-GB");
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskIndex === taskToEdit.taskIndex
          ? {
              ...task,
              text: taskName,
              subject: subject,
              priority: priority,
              executionDate: stringedDate,
            }
          : task
      )
    );

    setTaskToEdit({});
  };

  const handleSaveTask = (
    taskName,
    subject,
    priority,
    executionDate,
    taskIndex
  ) => {
    _.isEmpty(taskToEdit)
      ? handleNewTaskInsertion(
          taskName,
          subject,
          priority,
          executionDate,
          taskIndex
        )
      : handleTaskSaving(taskName, subject, priority, executionDate);
  };

  return (
    <>
      <ToDoIcon />
      <SearchTaskFilter />
      <Box display="flex" alignItems="center">
        <AddTaskButton onClick={handleOpenDialog} />
      </Box>
      <Box>
        <TaskDialog
          taskToEdit={taskToEdit}
          open={isDialogOpen}
          onClose={handleCloseDialog}
          onSave={handleSaveTask}
        />
      </Box>
      <Box>
        <TaskRepresentation
          handleEdit={setTaskToEdit}
          openDialog={handleOpenDialog}
        />
        <Menu />
      </Box>
    </>
  );
};

export default App;
