import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { DeleteCompletedTasksButton } from '../buttonsStyles/buttonsStyle';

const DeleteCompletedTasks = ({ removeCompletedTasks }) => {
  return (
    <DeleteCompletedTasksButton 
      variant="outlined" 
      startIcon={<DeleteIcon />}
      onClick={() => removeCompletedTasks()}
    >
      Delete completed tasks
    </DeleteCompletedTasksButton>
  );
};

export default DeleteCompletedTasks;