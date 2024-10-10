import isEmpty from "lodash/isEmpty";
import { Box } from "@mui/material";
import React, { useState } from "react";

import Menu from "components/menu/menu";
import ToDoIcon from "components/icons/todoIcon";
import { useTasks } from "contexts/tasksContext";
import TaskDialog from "components/dialog/dialog";
import AddTaskButton from "components/input/addTask";
import { useDialogFlag } from "contexts/dialogContext";
import MapComponent from "components/map/MapComponent";
import { useTaskToEdit } from "contexts/taskToEditContext";
import SearchTaskFilter from "components/search/searchFilter";
import TaskRepresentation from "components/tasksManagement/taskRepresentation";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { tasks, setTasks } = useTasks();
  const { setIsAddingOrEditing } = useDialogFlag();
  const { taskToEdit, setTaskToEdit } = useTaskToEdit();

  const handleOpenDialog = (isAdding) => {
    setIsAddingOrEditing(isAdding);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setTaskToEdit(null);
    setIsAddingOrEditing(false);
    setIsDialogOpen(false);
  };

  const handleNewTaskInsertion = (
    taskName,
    subject,
    priority,
    executionDate,
    location
  ) => {
    const stringedDate = executionDate.toLocaleDateString("en-US");
    const index = tasks.length ?? 0;

    setTasks((prev) => [
      ...prev,
      {
        taskIndex: index,
        taskName,
        subject,
        priority,
        location,
        executionDate: stringedDate,
        completed: false,
        canShow: true,
      },
    ]);
  };

  const handleTaskSaving = (editTask) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.taskIndex === editTask.taskIndex) {
          setTaskToEdit(null);
          const newTask = {
            ...task,
            taskName: editTask.taskName || "",
            subject: editTask.subject || "",
            priority: editTask.priority || 5,
            executionDate:
              new Date(editTask.executionDate).toLocaleDateString("en-US") ||
              new Date(),
            location: editTask.location || [0, 0],
          };
          return newTask;
        }
        return task;
      });
    });
  };

  const handleSaveTask = (
    taskName,
    subject,
    priority,
    executionDate,
    location,
    taskIndex
  ) => {
    isEmpty(taskToEdit)
      ? handleNewTaskInsertion(
          taskName,
          subject,
          priority,
          executionDate,
          location
        )
      : handleTaskSaving({
          taskName,
          subject,
          priority,
          executionDate,
          location,
          taskIndex,
        });
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
          open={isDialogOpen}
          onClose={handleCloseDialog}
          onSave={handleSaveTask}
        />
      </Box>
      <Box>
        <TaskRepresentation openDialog={handleOpenDialog} />
        <Menu />
      </Box>
      <Box>
        <br></br>
        <MapComponent canPoint={false} setLocation={null} />
      </Box>
    </>
  );
};

export default App;
