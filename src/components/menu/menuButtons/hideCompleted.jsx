import React from "react";
import HideSourceIcon from '@mui/icons-material/HideSource';

import { HideCompletedTasksButton } from "../buttonsStyles/buttonsStyle";

const HideCompletedTasks = ({ hideCompleted }) => {
    return (
        <HideCompletedTasksButton
          variant="outlined"
          startIcon={<HideSourceIcon />}
          onClick={() => hideCompleted()} 
        >
          Hide completed tasks  
        </HideCompletedTasksButton>
    );
};

export default HideCompletedTasks;