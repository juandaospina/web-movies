import React, { useEffect } from "react";

import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import { Navbar, SideBar } from "../../components";

const drawerWidth = 280;

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Box sx={{ display: "flex", fontFamily: "cursive" }}>
      <Navbar width={drawerWidth} />
      <SideBar width={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
