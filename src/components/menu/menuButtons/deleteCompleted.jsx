import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { TasksContext } from '../../../contexts/tasksContext';
import { DeleteCompletedTasksButton } from '../buttonsStyles/buttonsStyle';

const DeleteCompletedTasks = () => {
  const { setTasks } = useContext(TasksContext);

  const deleteAllCompletedTasksFromTasksList = () => {
    setTasks(prevTasks => 
      prevTasks.filter((task) => task.completed === false)
    );
  }

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