import Box from "@mui/material/node/Box";
import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
