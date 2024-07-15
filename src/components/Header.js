import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 6 }}>
      <Toolbar sx={{ bgcolor: "gray" }} data-testid="header">
        <Typography
          variant="h6"
          component="div"
          sx={{
            cursor: "pointer",
          }}
        >
          New York Times Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
