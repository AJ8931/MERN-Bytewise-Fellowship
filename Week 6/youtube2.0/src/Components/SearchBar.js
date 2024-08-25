import { IconButton, Paper } from "@mui/material/node";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input className="search-bar" placeholder="Search..." />
      <IconButton
        type="submit"
        sx={{ p: "12px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
