import { Box } from '@mui/material';
import React, { useState } from 'react';

import Menu from './menu/menu';
import TextInput from './input/textInput';
import AddTaskButton from './input/addTask';
import ToDoIcon from './tasksManagement/todoIcon';
import TaskRepresentation from './tasksManagement/taskRepresentation';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const removeTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  const markAsCompleted = (index) => {
    /*
     * Explanation why completed and canShow are the opposite values of !task.completed :
     * A task cannot be completed and shown (true & true) or not completed and not shown (false & false).
     * So, whenever the task is completed, it cannot be shown (true & false) or, when the task is
     * not completed, it can be shown (false & true) and that is why completed and canShow cannot
     * have the same boolean value.
     * And that is why completed set to it's opposite (!task.completed) and canShow is set to the
     * value of task.completed (before the value changes of course).
     */
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

  return (
    <>
      <ToDoIcon />
      <Box display="flex" alignItems="center">
        <TextInput 
          placeholder="Add a new task (Bases secure, villages secure etc...)"
          value={inputValue}
          setInputValue={setInputValue}
        />
        <AddTaskButton
         setTasks={setTasks}
         value={inputValue}
         setInputValue={setInputValue}
        />
      </Box>
      <br></br>
      <TaskRepresentation
        tasks={tasks}
        onRemoveTask={removeTask} 
        markAsCompleted={markAsCompleted}
      />
      <Menu 
        showAllTasks={showAllTasks}
        removeCompletedTasks={removeAllCompletedTasksFromTasksList}
        hideCompleted={hideCompletedTasksFromList}
      />
    </>
  );
}

export default App;
