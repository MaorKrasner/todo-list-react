import { Assignment } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

const ToDoIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 150 80" // Increased height of the viewBox to provide more space
      style={{
        width: "200px",
        height: "110px", // Adjusted height to match the new viewBox
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Assignment
        style={{
          fontSize: 60,
          color: "#4CAF50",
        }}
      />
      <text
        x="50%"
        y="78" // Raised y-coordinate to move text higher
        fontSize="8"
        fontFamily="Arial, sans-serif"
        fill="#333333"
        textAnchor="middle"
      >
        To-Do List
      </text>
    </SvgIcon>
  );
};

export default ToDoIcon;
