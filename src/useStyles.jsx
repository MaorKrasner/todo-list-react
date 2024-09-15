// src/useStyles.jsx
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: "#abcdef",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    flexDirection: "column",
  },
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    width: "100%",
  },
}));

export default useStyles;
