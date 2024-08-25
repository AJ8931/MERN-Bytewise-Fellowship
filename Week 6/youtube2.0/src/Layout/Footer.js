import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { logo } from "../Utilities/Constants"; // Assuming you have the logo imported from Constants

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "150px",
        backgroundColor: "#000",
        color: "white",
        width: "100%",
        padding: "20px 0",
      }}
    >
      <Box sx={{ mb: 1 }}>
        <img src={logo} alt="YouTube 2.0 Logo" style={{ height: "40px" }} />
      </Box>

      <Typography variant="body2" sx={{ mb: 1 }}>
        YouTube 2.0 - Watch as much as you like, anytime, anywhere.
      </Typography>

      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Made by{" "}
        <Link
          href="https://anas-jahangir.vercel.app/"
          color="#007BFF"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anas Jahangir
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
