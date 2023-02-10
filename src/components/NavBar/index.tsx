import React, { FC } from "react";

import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { GrNotification, GrChat } from "react-icons/gr";
import { MenuOutlined } from "@mui/icons-material";

import profile from "../../assets/men.png";
import "../../styles/NavBar.css";

interface Props {
  width: number;
}

export const Navbar: FC<Props> = ({ width }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        border: "2px solid #f2f4f9",
        background: "#FFFFFF",
        width: { sm: `calc(100% - ${width}px)` },
        ml: { sm: `${width}px` },
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{
              fontFamily: "system-ui",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            Películas
          </Typography>

          {/* <input
              name="search"
              type="text"
              value={query}
              onChange={handleChange}
              className="input-search"
              placeholder="Search movie..."
            /> */}

          <div className="icons-navigation">
            <IconButton color="primary">
              <GrChat />
            </IconButton>
            <IconButton color="primary">
              <GrNotification color="#00ffcb" />
            </IconButton>
            <IconButton color="error">
              <img
                src={profile}
                alt="user profile"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </IconButton>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
