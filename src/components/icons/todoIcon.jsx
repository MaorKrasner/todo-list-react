import { SvgIcon } from "@mui/material";

const ToDoIcon = (props) => {
    return (
        <SvgIcon
            {...props}
            viewBox="0 0 600 200"
            style={{
                width: "200px",
                height: "90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto" // Centers the icon horizontally in its container
            }}
        >
            <rect x="50" y="50" width="500" height="100" rx="20" ry="20"
                style={{ fill: "none", stroke: "#4CAF50", strokeWidth: 10 }} />
            <text x="300" y="110" fontSize="100" fontFamily="Arial, sans-serif" fill="#4CAF50" textAnchor="middle"
                dominantBaseline="middle">✓</text>
            <text x="300" y="190" fontSize="50" fontFamily="Arial, sans-serif" fill="#333333" textAnchor="middle"
                dominantBaseline="middle">To-Do List</text>
        </SvgIcon>
    );
};

export default ToDoIcon;
