import React, { useState } from "react";
import enGB from "date-fns/locale/en-GB";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Button,
  Dialog,
  Select,
  Slider,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  DialogTitle,
  DialogContent,
  DialogActions,
  OutlinedInput,
} from "@mui/material";

const TaskDialog = ({ taskToEdit, open, onClose, onSave }) => {
  const [taskName, setTaskName] = useState("");
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState(5);
  const [executionDate, setExecutionDate] = useState(null);
  const [taskIndex, setTaskIndex] = useState(0);

  const subjects = [
    "Transfer of weapons",
    "Intelligence gathering operation",
    "Locate a new site",
    "Activity routine characterization",
  ];

  const handleSave = () => {
    onSave(taskName, subject, priority, executionDate, taskIndex);
    setTaskIndex((prev) => prev + 1);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create a New Task</DialogTitle>

      <DialogContent>
        <TextField
          defaultValue={taskToEdit ? taskToEdit.text : ""}
          margin="dense"
          label="Task Name"
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <FormControl variant="outlined" fullWidth margin="dense">
          <InputLabel
            htmlFor="subject-select"
            sx={{
              backgroundColor: "white",
              padding: "0 2px",
              transform: "translate(14px, -6px) scale(0.75)",
            }}
          >
            Subject
          </InputLabel>
          <Select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            input={<OutlinedInput label="Subject" id="subject-select" />}
            label="Subject"
          >
            {subjects.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* <TextField
          label="Execution Date (YYYY-MM-DD)"
          type="date"
          value={executionDate}
          onChange={(e) => setExecutionDate(e.target.value)}
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        /> */}

        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Execution Date"
            value={executionDate}
            onChange={(newDate) => setExecutionDate(newDate)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                margin="dense"
                variant="outlined"
              />
            )}
          />
        </LocalizationProvider> */}

        <LocalizationProvider dateAdapter={AdapterDateFns} locale={enGB}>
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
                InputLabelProps={{ shrink: true }} // Ensures the label does not overlap with the text field
              />
            )}
          />
        </LocalizationProvider>

        <FormControl fullWidth margin="dense">
          <InputLabel shrink>Priority</InputLabel>
          <Slider
            value={priority}
            onChange={(e, newValue) => setPriority(newValue)}
            aria-labelledby="priority-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskDialog;
