import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, IconButton } from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

import { useTasks } from "contexts/tasksContext";
import { useSearch } from "contexts/searchContext";

const useStyles = makeStyles({
  listItem: {
    width: "1050px",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "10px",
    cursor: "pointer",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&.completed": {
      textDecoration: "line-through",
      color: "#999",
    },
    "&.active": {
      textDecoration: "none",
      color: "black",
    },
  },
  iconButton: {
    marginRight: "8px",
  },
  taskContainer: {
    display: "flex",
  },
  hiddenTaskContainer: {
    display: "none",
  },
  editIcon: {
    color: "#1976D2",
  },
});

const TaskRepresentation = ({ handleEdit, openDialog }) => {
  const { tasks, setTasks } = useTasks();
  const { searchQuery } = useSearch();

  const filteredTasks = tasks.filter(
    (task) =>
      (task.text || "").toLowerCase().includes(searchQuery.toLowerCase()) &&
      (task.subject || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRemoveTask = (index) => {
    const removeTask = () => {
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    return removeTask;
  };

  const getEditFunction = (task) => {
    const editFunction = () => {
      if (!task.completed) {
        handleEdit({
          ...task,
          executionDate: new Date(task.executionDate).toLocaleDateString(
            "en-GB"
          ),
        });
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

  const classes = useStyles();

  return filteredTasks
    .filter((task) => task.canShow)
    .map((task, index) => (
      <div
        key={index}
        className={
          task.canShow ? classes.taskContainer : classes.hiddenTaskContainer
        }
      >
        <ListItem
          className={`${classes.listItem} ${
            task.completed ? "completed" : "active"
          }`}
          component="span"
        >
          <div>
            {task.taskIndex + 1}. DESCRIPTION: {task.text}, SUBJECT:{" "}
            {task.subject}, PRIORITY: {task.priority}, DATE:{" "}
            {task.executionDate}
          </div>

          <div>
            <IconButton
              aria-label="complete"
              size="large"
              onClick={getMarkAsCompletedFn(index)}
              className={classes.iconButton}
            >
              <CheckIcon color="primary" />
            </IconButton>

            <IconButton
              aria-label="edit"
              size="large"
              onClick={getEditFunction(task)}
              className={classes.iconButton}
            >
              <EditIcon className={classes.editIcon} />
            </IconButton>

            <IconButton
              aria-label="delete"
              size="large"
              onClick={getRemoveTask(index)}
              className={classes.iconButton}
            >
              <RemoveCircleOutlineIcon color="secondary" />
            </IconButton>
          </div>
        </ListItem>
      </div>
    ));
};

export default TaskRepresentation;
