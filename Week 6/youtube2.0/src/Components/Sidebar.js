import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../Utilities/Constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span style={{ opacity: "1" }}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
