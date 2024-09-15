import _ from "lodash";
import { Box } from "@mui/material";
import React, { useState } from "react";

import useStyles from "useStyles";
import Menu from "components/menu/menu";
import ToDoIcon from "components/icons/todoIcon";
import TaskDialog from "components/dialog/dialog";
import { useTasks } from "contexts/tasksContext";
import AddTaskButton from "components/input/addTask";
import SearchTaskFilter from "components/search/searchFilter";
import TaskRepresentation from "components/tasksManagement/taskRepresentation";

const App = () => {
  const classes = useStyles();

  const { tasks, setTasks } = useTasks();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSaveEdit = (taskIndex) => {
    setTaskToEdit(tasks[Number(+taskIndex)]);
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
      <div className={classes.body}>
        <div className={classes.appContainer}>
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
              handleEdit={handleSaveEdit}
              openDialog={handleOpenDialog}
            />
            <Menu />
          </Box>
        </div>
      </div>
    </>
  );
};

export default App;
