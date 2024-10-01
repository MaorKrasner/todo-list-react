import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useBaseButtonStyles = makeStyles({
  baseButton: {
    backgroundColor: "#E0E0E0",
    border: "none",
    borderRadius: "10px",
    padding: "20px 10px",
    fontSize: "1rem",
    cursor: "pointer",
    margin: "5 10px",
    marginLeft: "0px",
    height: "35px",
    textTransform: "none",
    boxShadow: "none",
  },
});

const useButtonStyles = makeStyles({
  deleteButton: {
    color: "red",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },
  hideButton: {
    color: "black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  showButton: {
    color: "green",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
});

const BaseButton = ({ children, variantClassName, onClick, startIcon }) => {
  const baseClasses = useBaseButtonStyles();

  return (
    <Box
      style={{
        backgroundColor: "#E0E0E0",
        paddingLeft: "0px",
        marginLeft: "10px",
        marginRight: "10px",
        borderRadius: "10px",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <Button
        className={`${baseClasses.baseButton} ${variantClassName}`}
        onClick={onClick}
        startIcon={startIcon}
      >
        {children}
      </Button>
    </Box>
  );
};

export default BaseButton;
