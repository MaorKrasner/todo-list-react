import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { Box, ListItem, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { useTasks } from "contexts/tasksContext";
import { useSearch } from "contexts/searchContext";

const TaskRepresentation = ({ handleEdit, openDialog }) => {
  const { tasks, setTasks } = useTasks();
  const { searchQuery } = useSearch();
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const shouldBeDisplayed = (canShow) => (canShow ? "flex" : "none");

  const getRemoveTask = (index) => {
    const removeTask = (index) => {
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    return removeTask;
  };

  const getEditFunction = (taskIndex, completed) => {
    const editFunction = () => {
      if (!completed) {
        handleEdit(taskIndex);
        openDialog();
      }
    };

    return editFunction;
  };

  const getMarkAsCompletedFn = (taskIndex) => {
    const markAsCompleted = () => {
      setTasks((prevTasks) =>
        prevTasks.map((task, i) =>
          i === taskIndex
            ? { ...task, completed: !task.completed, canShow: task.completed }
            : task
        )
      );
    };

    return markAsCompleted;
  };

  return filteredTasks
    .filter((task) => task.canShow)
    .map((task, index) => (
      <Box key={index}>
        <ListItem
          sx={{
            width: "1050px",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            cursor: "pointer",
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#999" : "black",
            backgroundColor: "white",
            display: shouldBeDisplayed(task.canShow),
            justifyContent: "space-between",
            alignItems: "center",
          }}
          component="span"
        >
          <Box component="span">
            {task.taskIndex + 1}. DESCRIPTION: {task.text}, SUBJECT:{" "}
            {task.subject}, PRIORITY: {task.priority}, DATE:{" "}
            {task.executionDate}
          </Box>

          <Box>
            <IconButton
              aria-label="complete"
              size="large"
              onClick={getMarkAsCompletedFn(index)}
            >
              <CheckIcon color="success" />
            </IconButton>

            <IconButton
              aria-label="edit"
              size="large"
              onClick={getEditFunction(index, task.completed)}
            >
              <EditIcon style={{ color: "#1976D2" }} />
            </IconButton>

            <IconButton
              aria-label="delete"
              size="large"
              onClick={getRemoveTask(index)}
            >
              <RemoveCircleOutlineIcon color="error" />
            </IconButton>
          </Box>
        </ListItem>
      </Box>
    ));
};

export default TaskRepresentation;
