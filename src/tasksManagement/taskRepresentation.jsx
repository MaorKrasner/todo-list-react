import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { Box, ListItem, IconButton } from "@mui/material";
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
                            marginTop: "10px",
                            marginBottom: '10px',
                            marginLeft: '10px',
                            cursor: 'pointer',
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: task.completed ? '#999' : 'black',
                            backgroundColor: "white",
                            display: shouldBeDisplayed(task.canShow),
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                        component="span"
                    >
                        <Box component="span">
                            DESCRIPTION: {task.text}, SUBJECT: {task.subject}, PRIORITY: {task.priority}, DATE: {task.executionDate}
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
                                aria-label="edit" 
                                size="large"
                                // onClick={}
                            >
                                <EditIcon style={{color: "#1976D2"}}/>
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
