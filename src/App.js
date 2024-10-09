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
  const { tasks, setTasks } = useTasks();
  const { setIsAddingOrEditing } = useDialogFlag();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { taskToEdit, setTaskToEdit } = useTaskToEdit();

  const handleOpenDialog = () => {
    setIsAddingOrEditing(true);
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
    const taskIndex = tasks.length > 0 ? tasks.length : 0;

    setTasks((prev) => [
      ...prev,
      {
        taskIndex: taskIndex,
        taskName,
        subject,
        priority,
        location,
        executionDate: stringedDate,
        completed: false,
        canShow: true,
      },
    ]);

    setTaskToEdit((prev) => tasks[tasks.length - 1]);
    console.log(taskToEdit);
  };

  // HERE, IN THE MAP
  const handleTaskSaving = (editTask) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.taskIndex === taskToEdit.taskIndex) {
          const newTask = {
            ...task,
            taskName: taskToEdit.taskName || "",
            subject: taskToEdit.subject || "",
            priority: taskToEdit.priority || 5,
            executionDate:
              new Date(editTask.executionDate).toLocaleDateString("en-US") ||
              new Date(),
            location: taskToEdit.location || [0, 0],
          };

          setTaskToEdit(null);
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
    location
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
        <TaskRepresentation
          handleEdit={handleTaskSaving}
          openDialog={handleOpenDialog}
        />
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
