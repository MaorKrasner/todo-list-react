import React, { useState } from 'react';
import { Box } from '@mui/material';

import Menu from './components/menu/menu';
import TaskDialog from './components/dialog/dialog';
import AddTaskButton from './components/input/addTask';
import ToDoIcon from './components/icons/todoIcon';
import SearchTaskFilter from './components/search/searchFilter';
import TaskRepresentation from './components/tasksManagement/taskRepresentation';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskToEdit, setTaskToEdit] = useState({});

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSaveTask = ({ taskName, subject, priority, executionDate, taskIndex }) => {
    if (JSON.stringify(taskToEdit) === JSON.stringify({})) {
      setTasks((prev) => 
      [...prev,
        { 
          taskIndex: taskIndex,
          text: taskName,
          subject: subject,
          priority: priority,
          executionDate: executionDate,
          completed: false,
          canShow: true 
        }
      ]);

      return;
    }

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
    <>
      <ToDoIcon />
      <SearchTaskFilter
        handleChange={handleSearchChange}
        searchQuery={searchQuery}
      />
      <Box display="flex" alignItems="center">
        <AddTaskButton
         onClick={handleOpenDialog}
        />
      </Box>
      <Box>
        <TaskDialog
          taskToEdit={taskToEdit}
          open={dialogOpen}
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
    </>
  );
}

export default App;
