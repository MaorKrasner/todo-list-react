import isEmpty from "lodash/isEmpty";
import { Box } from "@mui/material";
import React, { useState } from "react";

import Menu from "components/menu/menu";
import ToDoIcon from "components/icons/todoIcon";
import { useTasks } from "contexts/tasksContext";
import TaskDialog from "components/dialog/dialog";
import AddTaskButton from "components/input/addTask";
import MapComponent from "components/map/MapComponent";
import SearchTaskFilter from "components/search/searchFilter";
import TaskRepresentation from "components/tasksManagement/taskRepresentation";

const App = () => {
  const { tasks, setTasks } = useTasks();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setTaskToEdit(null);
    setIsDialogOpen(false);
  };

  const handleNewTaskInsertion = (
    taskName,
    subject,
    priority,
    executionDate,
    location
  ) => {
    const stringedDate = executionDate.toLocaleDateString("en-GB");
    const taskIndex =
      tasks.length > 0 ? tasks[tasks.length - 1].taskIndex + 1 : 0;

    setTasks((prev) => [
      ...prev,
      {
        taskIndex,
        text: taskName,
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
        if (task.taskIndex === taskToEdit.taskIndex) {
          setTaskToEdit(null);
          return {
            ...task,
            text: editTask.taskName || "",
            subject: editTask.subject || "",
            priority: editTask.priority || 5,
            executionDate:
              new Date(editTask.executionDate).toLocaleDateString("en-GB") ||
              new Date(),
            location: editTask.location || task.location,
          };
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
    taskIndex,
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
      <Box>
        <br></br>
        <MapComponent canPoint={false} setLocation={null} />
      </Box>
    </>
  );
};

export default App;
