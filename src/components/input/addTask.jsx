import { Button } from "@mui/material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddTaskButton = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            variant="outlined" startIcon={<PlaylistAddIcon />}
            sx={{
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
                textTransform: 'none',
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