import { Button } from "@mui/material";
import HideSourceIcon from '@mui/icons-material/HideSource';

const HideCompletedTasks = ({ hideCompleted }) => {
    return (
        <Button 
            variant="outlined" startIcon={<HideSourceIcon />}
            onClick={() => hideCompleted()}
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
                    backgroundColor: 'black',
                    color: 'white'
                },
            }}
        >
            Hide completed tasks
        </Button>
    );
};

export default HideCompletedTasks;