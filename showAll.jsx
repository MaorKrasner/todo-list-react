import { Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

const ShowAllTasks = ({ showAllTasks }) => {
    return (
        <Button 
            variant="outlined" startIcon={<VisibilityIcon />}
            onClick={() => showAllTasks()}
            sx={{
                backgroundColor: "#E0E0E0",
                color: "green",
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
                    backgroundColor: 'white',
                    color: 'green'
                },
            }}
        >
            Show all tasks
        </Button>
    );
};

export default ShowAllTasks;