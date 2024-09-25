import _ from "lodash";
import React, { useState } from "react";
import enGB from "date-fns/locale/en-GB";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
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

  const areAllPropertiesFilled = !(
    taskName &&
    subject &&
    priority &&
    executionDate
  );

  const handleSave = () => {
    onSave(taskName, subject, priority, executionDate, taskIndex);
    setTaskIndex((prev) => prev + 1);
    onClose();
  };

  const rightPriority = () => (_.isEmpty(taskToEdit) ? 5 : taskToEdit.priority);
  const rightExecutionDate = () =>
    setExecutionDate(
      _.isEmpty(taskToEdit) ? executionDate : taskToEdit.executionDate
    );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create a New Task</DialogTitle>

      <DialogContent>
        <TextField
          margin="dense"
          label="Task Name"
          fullWidth
          defaultValue={taskToEdit.text}
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
            value={taskToEdit.subject}
            onChange={(e) => setSubject(e.target.value)}
            input={<OutlinedInput label="Subject" id="subject-select" />}
            label="Subject"
          >
            {subjects.map((subject) => (
              <MenuItem
                key={subject}
                value={subject}
                sx={{
                  padding: "4px 16px",
                  minHeight: "30px",
                  textAlign: "left",
                }}
                style={{
                  display: "block",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    textAlign: "left",
                    width: "100%",
                    paddingLeft: "8px",
                  }}
                >
                  {subject}
                </span>{" "}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns} locale={enGB}>
          <DatePicker
            label="Execution Date"
            value={rightExecutionDate}
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

        <FormControl fullWidth margin="dense">
          <InputLabel shrink>Priority</InputLabel>
          <Slider
            defaultValue={rightPriority}
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
