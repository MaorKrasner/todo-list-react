import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

import { ShowAllTasksButton } from "../buttonsStyles/buttonsStyle";

const ShowAllTasks = ({ showAllTasks }) => {
    return (
        <ShowAllTasksButton
          variant="outlined"
          startIcon={<VisibilityIcon />}
          onClick={() => showAllTasks()}
        >
            Show all tasks
        </ShowAllTasksButton>
    );
};

export default ShowAllTasks;