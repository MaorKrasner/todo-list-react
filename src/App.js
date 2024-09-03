import _ from 'loadsh';
import { Box } from '@mui/material';
import React, { useState, useContext } from 'react';

import Menu from './components/menu/menu';
import ToDoIcon from './components/icons/todoIcon';
import TaskDialog from './components/dialog/dialog';
import AddTaskButton from './components/input/addTask';
import SearchTaskFilter from './components/search/searchFilter';
import TaskRepresentation from './components/tasksManagement/taskRepresentation';
import { SearchContext, SearchProvider } from './components/search/searchContext';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const { searchQuery } = useContext(SearchContext);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

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

  const handleSaveEdit = (taskIndex) => {
    setTaskToEdit(tasks[Number(+taskIndex)]);
  }

  const removeTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  const markAsCompleted = (index) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed, canShow: task.completed } : task
      )
    );
  }

  const showAllTasks = () => {
    setTasks(prevTasks => 
      prevTasks.map((task) => task = {...task, canShow: true})
    );
  }

  const hideCompletedTasksFromList = () => {
    setTasks(prevTasks =>
      prevTasks
        .map((task) =>
          task.completed ? {...task, canShow: false} : task
        )
    );
  }

  const removeAllCompletedTasksFromTasksList = () => {
    setTasks(prevTasks => 
      prevTasks.filter((task) => task.completed === false)
    );
  }

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <SearchProvider>
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
          tasks={filteredTasks}
          onRemoveTask={removeTask} 
          markAsCompleted={markAsCompleted}
          handleEdit={handleSaveEdit}
          openDialog={handleOpenDialog}
          closeDialog={handleCloseDialog}
        />
        <Menu 
          showAllTasks={showAllTasks}
          removeCompletedTasks={removeAllCompletedTasksFromTasksList}
          hideCompleted={hideCompletedTasksFromList}
        />
      </Box>
    </SearchProvider>
  );
}

export default App;
