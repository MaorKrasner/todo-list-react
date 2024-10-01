import _ from "lodash";
import enGB from "date-fns/locale/en-GB";
import React, { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
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

const TaskDialog = ({ taskToEdit, open, onClose, onSave }) => {
  const [taskName, setTaskName] = useState("");
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState(5);
  const today = new Date();
  const [executionDate, setExecutionDate] = useState(today);
  const [taskIndex, setTaskIndex] = useState(0);

  const areAllPropertiesFilled = !(
    taskName &&
    subject &&
    priority &&
    executionDate
  );

  useEffect(() => {
    if (taskToEdit) {
      console.log("taskToEdit loaded:", taskToEdit);
      setTaskName(taskToEdit.text || "");
      setSubject(taskToEdit.subject || "");
      setPriority(taskToEdit.priority || 5);
      setExecutionDate(
        new Date(taskToEdit.executionDate).toLocaleDateString("en-US") ||
          today.toLocaleDateString("en-US")
      );
    }
  }, [taskToEdit]);

  const handleSave = () => {
    onSave(taskName, subject, priority, executionDate, taskIndex);
    setTaskIndex((prev) => prev + 1);
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
          defaultValue={taskToEdit !== null ? taskToEdit.text : ""}
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

        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
          <DatePicker
            label="Execution Date"
            value={executionDate}
            onChange={(newValue) => setExecutionDate(newValue)}
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
