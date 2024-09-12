import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  baseButton: {
    backgroundColor: "#E0E0E0",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    marginLeft: "10px",
    height: "40px",
    textTransform: "none",
    marginTop: "15px",
  },

  delete: {
    color: "red",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },

  hide: {
    color: "black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },

  show: {
    color: "green",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
});

const BaseStyledButton = styled(Button)({
  backgroundColor: "#E0E0E0",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  fontSize: "1rem",
  cursor: "pointer",
  marginLeft: "10px",
  height: "40px",
  textTransform: "none",
  marginTop: "15px",
});

const DeleteCompletedTasksButton = styled(BaseStyledButton)({
  color: "red",
  "&:hover": {
    backgroundColor: "red",
    color: "white",
  },
});

const HideCompletedTasksButton = styled(BaseStyledButton)({
  color: "black",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
});

const ShowAllTasksButton = styled(BaseStyledButton)({
  color: "green",
  "&:hover": {
    backgroundColor: "green",
    color: "white",
  },
});

export {
  ShowAllTasksButton,
  HideCompletedTasksButton,
  DeleteCompletedTasksButton,
};
