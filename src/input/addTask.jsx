import { Button } from "@mui/material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddTaskButton = ({ setTasks, value, setInputValue }) => {
    const addHandleClick = () => {
        setTasks((prev) => [...prev, { text: value, completed: false, canShow: true }])
        setInputValue("");
    };

    return (
        <Button
            onClick={addHandleClick}
            variant="outlined" startIcon={<PlaylistAddIcon />}
            style={{
                backgroundColor: "#E0E0E0",
                color: "green",
                border: "none",
                borderRadius: "4px",
                padding: "10px 20px",
                fontSize: "1rem",
                cursor: "pointer",
                marginLeft: "10px",
                marginTop: "20px",
                height: "40px",
                textTransform: 'none'
            }}
            sx={{
                '&:hover': {
                    backgroundColor: "green",
                    color: "white"  
                }
            }}
        >
            Add task
        </Button>
    );
};

export default AddTaskButton;