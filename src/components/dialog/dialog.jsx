import _ from "lodash";
import enUS from "date-fns/locale/en-US";
import React, { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Box,
  Button,
  Dialog,
  Slider,
  TextField,
  InputLabel,
  FormControl,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import MapComponent from "components/map/MapComponent";
import { useTaskToEdit } from "contexts/taskToEditContext";

const TaskDialog = ({ open, onClose, onSave }) => {
  const [taskName, setTaskName] = useState("");
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState(5);
  const today = new Date();
  const [executionDate, setExecutionDate] = useState(today);
  const [location, setLocation] = useState([0, 0]);
  const { taskToEdit } = useTaskToEdit();

  const areAllPropertiesFilled = !(
    taskName &&
    subject &&
    priority &&
    executionDate &&
    location
  );

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.taskName || "");
      setSubject(taskToEdit.subject || "");
      setPriority(taskToEdit.priority || 5);
      setExecutionDate(
        new Date(taskToEdit.executionDate).toLocaleDateString("en-US") ||
          today.toLocaleDateString("en-US")
      );
      setLocation(taskToEdit.location || [0, 0]);
    }
  }, [taskToEdit]);

  const handleSave = () => {
    onSave(taskName, subject, priority, executionDate, location);
    setTaskName(taskToEdit?.taskName ?? "");
    setSubject(taskToEdit?.subject ?? "");
    setPriority(taskToEdit?.priority ?? 5);
    setExecutionDate(
      taskToEdit?.executionDate ?? today.toLocaleDateString("en-US")
    );
    setLocation(taskToEdit?.location ?? [0, 0]);
    onClose();
  };

  const handlePriorityChange = (event, newValue) => {
    setPriority(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create a New Task</DialogTitle>

      <DialogContent>
        <TextField
          margin="dense"
          label="Task Name"
          fullWidth
          defaultValue={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <FormControl variant="outlined" fullWidth margin="dense">
          <TextField
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
            margin="dense"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
          <DatePicker
            label="Execution Date"
            value={executionDate}
            onChange={(newValue) => setExecutionDate(newValue)}
            //dateFormat="MM/dd/yyyy"
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                margin="dense"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </LocalizationProvider>

        <InputLabel margin="dense">Priority</InputLabel>
        <Slider
          value={priority}
          onChange={handlePriorityChange}
          min={1}
          max={10}
          marks
          step={1}
          valueLabelDisplay="auto"
        />

        <Box>
          <MapComponent canPoint={true} setLocation={setLocation} />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          disabled={areAllPropertiesFilled}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskDialog;
