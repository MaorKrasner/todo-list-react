import _ from 'loadsh';
import { Box } from '@mui/material';
import React, { useContext, useState } from 'react';

import Menu from './components/menu/menu';
import ToDoIcon from './components/icons/todoIcon';
import TaskDialog from './components/dialog/dialog';
import { TasksContext } from './contexts/tasksContext';
import AddTaskButton from './components/input/addTask';
import SearchTaskFilter from './components/search/searchFilter';
import TaskRepresentation from './components/tasksManagement/taskRepresentation';

const App = () => {
  const { tasks, setTasks } = useContext(TasksContext);
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
  }

  const handleNewTaskInsertion = (taskName, subject, priority, executionDate, taskIndex) => {
    setTasks((prev) => 
      [...prev,
        { 
          taskIndex,
          text: taskName,
          subject,
          priority,
          executionDate,
          completed: false,
          canShow: true 
        }
      ]);
  };

  const handleTaskSaving = (taskName, subject, priority, executionDate) => {
    setTasks(prevTasks => 
      prevTasks.map((task) => 
        task.taskIndex === taskToEdit.taskIndex 
          ? 
          {
            ...task,
            text: taskName,
            subject: subject,
            priority: priority,
            executionDate: executionDate, 
          }
          : task
      )
    );

    setTaskToEdit({});
  };

  const handleSaveTask = (taskName, subject, priority, executionDate, taskIndex) => {
    _.isEmpty(taskToEdit) 
      ? handleNewTaskInsertion(taskName, subject, priority, executionDate, taskIndex) 
      : handleTaskSaving(taskName, subject, priority, executionDate);
  };

  return (
    <>
      <ToDoIcon />
      <SearchTaskFilter />
      <Box display="flex" alignItems="center">
        <AddTaskButton
         onClick={handleOpenDialog}
        />
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
    </>
  );
}

export default App;
