import React from "react";
import { SvgIcon } from "@material-ui/core";
import { Assignment } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  svgIcon: {
    width: "200px",
    height: "110px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  assignmentIcon: {
    fontSize: 60,
    color: "#4CAF50",
  },
  text: {
    fontSize: 8,
    fontFamily: "Arial, sans-serif",
    fill: "#333333",
    textAnchor: "middle",
  },
});

const ToDoIcon = (props) => {
  const classes = useStyles();

  return (
    <SvgIcon {...props} viewBox="0 0 150 80" className={classes.svgIcon}>
      <Assignment className={classes.assignmentIcon} />
      <text x="50%" y="78" className={classes.text}>
        To-Do List
      </text>
    </SvgIcon>
  );
};

export default ToDoIcon;
