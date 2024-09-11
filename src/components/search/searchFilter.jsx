import React from "react";
import { TextField } from "@mui/material";

import { useSearch } from "../../contexts/searchContext";

const SearchTaskFilter = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <TextField
      variant="outlined"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search tasks..."
      fullWidth
      InputProps={{
        style: {
          width: "1050px",
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
        },
      }}
      sx={{
        width: "80%",
        marginTop: "20px",
        marginLeft: "10px",
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#888",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#555",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          },
        },
      }}
    />
  );
};

export default SearchTaskFilter;
