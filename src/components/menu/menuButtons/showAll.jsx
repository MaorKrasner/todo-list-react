import React, { useContext } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

import { TasksContext } from "../../../contexts/tasksContext";
import { ShowAllTasksButton } from "../buttonsStyles/buttonsStyle";

const ShowAllTasks = () => {
    const { setTasks } = useContext(TasksContext);

    const showAllTasks = () => {
      setTasks(prevTasks => 
        prevTasks.map((task) => task = {...task, canShow: true})
      );
    }

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