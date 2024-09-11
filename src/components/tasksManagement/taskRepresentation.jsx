import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { Box, ListItem, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { useTasks } from "../../contexts/tasksContext";
import { useSearch } from "../../contexts/searchContext";

const TaskRepresentation = ({ handleEdit, openDialog }) => {
  const { tasks, setTasks } = useTasks();
  const { searchQuery } = useSearch();
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const markAsCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index
          ? { ...task, completed: !task.completed, canShow: task.completed }
          : task
      )
    );
  };

  const shouldBeDisplayed = (canShow) => (canShow ? "flex" : "none");

  const editFunction = (taskIndex, completed) => {
    if (!completed) {
      handleEdit(taskIndex);
      openDialog();
    }
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
              onClick={() => markAsCompleted(index)}
            >
              <CheckIcon color="success" />
            </IconButton>

            <IconButton
              aria-label="edit"
              size="large"
              onClick={() => editFunction(index, task.completed)}
            >
              <EditIcon style={{ color: "#1976D2" }} />
            </IconButton>

            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => removeTask(index)}
            >
              <RemoveCircleOutlineIcon color="error" />
            </IconButton>
          </Box>
        </ListItem>
      </Box>
    ));
};

export default TaskRepresentation;
