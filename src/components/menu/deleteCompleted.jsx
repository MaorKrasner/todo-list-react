import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteCompletedTasks = ({ removeCompletedTasks }) => {

    return (
        <Button 
            variant="outlined" startIcon={<DeleteIcon />}
            onClick={() => removeCompletedTasks()}
            sx={{
                backgroundColor: "#E0E0E0",
                color: "red",
                border: "none",
                borderRadius: "4px",
                padding: "10px 20px",
                fontSize: "1rem",
                cursor: "pointer",
                marginLeft: "10px",
                height: "40px",
                textTransform: 'none',
                marginTop: '15px',
                '&:hover': {
                    backgroundColor: 'red',
                    color: "white"
                },
            }}
        >
            Delete completed tasks
        </Button>
    );
};

export default DeleteCompletedTasks;