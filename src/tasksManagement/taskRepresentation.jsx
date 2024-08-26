import { Box, ListItem, IconButton } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const TaskRepresentation = ({ tasks, onRemoveTask, markAsCompleted }) => {
    const shouldBeDisplayed = (canShow) => canShow ? 'flex' : 'none';

    return (
        tasks
            .filter(task => task.canShow)
            .map((task, index) => (
                <Box key={index}>
                    <ListItem
                        sx={{
                            width: "1050px",
                            marginBottom: '10px',
                            marginLeft: '10px',
                            cursor: 'pointer',
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: task.completed ? '#999' : 'black',
                            backgroundColor: "white",
                            display: shouldBeDisplayed(task.canShow),
                            justifyContent: 'space-between', // space between text and icons
                            alignItems: 'center'
                        }}
                        component="span"
                    >
                        <Box component="span">
                            {task.text}
                        </Box>

                        <Box>
                            <IconButton
                                aria-label="complete" 
                                size="large"
                                onClick={() => markAsCompleted(index)}
                            >
                                <CheckIcon color="success" />
                            </IconButton>

                            <IconButton
                                aria-label="delete" 
                                size="large"
                                onClick={() => onRemoveTask(index)}
                            >
                                <RemoveCircleOutlineIcon color="error" />
                            </IconButton>
                        </Box>
                    </ListItem>
                </Box>
            ))
    );
};

export default TaskRepresentation;
