import { FC } from "react";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import {
  CircleRounded,
  FavoriteRounded,
  MovieCreationRounded,
  PlayCircleRounded,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

import logotipe from "../../assets/skysmobile.png";
import "../../styles/SideBar.css";

interface Props {
  width: number;
}

export const SideBar: FC<Props> = ({ width = 240 }) => {
  const location = useLocation();

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: width },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: width },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logotipe}
            width="180px"
            height="40px"
            alt="logotipe skymobiles filsm"
          />
        </Toolbar>
        <Divider />

        <nav>
          <ul>
            <li
              className={
                location.pathname === "/movies/home" 
                  ? "active" 
                  : "menu-item"
              }
            >
              <IconButton color="primary">
                <CircleRounded />
              </IconButton>
              <a href="/movies/home">Home</a>
            </li>

            <li
              className={
                location.pathname === "/movies/films" 
                  ? "active" 
                  : "menu-item"
              }
            >
              <IconButton color="primary">
                <PlayCircleRounded />
              </IconButton>
              <a href="/movies/films">Films</a>
            </li>

            <li
              className={
                location.pathname === "/movies/favorites"
                  ? "active"
                  : "menu-item"
              }
            >
              <IconButton color="primary">
                <FavoriteRounded />
              </IconButton>
              <a href="/movies/films">Favoritas</a>
            </li>

            <li
              className={
                location.pathname === "/movies/news" 
                  ? "active" 
                  : "menu-item"
              }
            >
              <IconButton color="primary">
                <MovieCreationRounded />
              </IconButton>
              <a href="/movies/films">Estrenos</a>
            </li>
          </ul>
        </nav>
      </Drawer>
    </Box>
  );
};
