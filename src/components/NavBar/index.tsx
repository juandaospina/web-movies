import React, { FC, useState } from "react";

import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { GrNotification, GrChat } from "react-icons/gr";
import { MenuOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import profile from "../../assets/men.png";
import "../../styles/NavBar.css";

interface Props {
  width: number;
}

export const Navbar: FC<Props> = ({ width }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    return navigate(`/movies/search/${query}`);
  };

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

          <form onSubmit={handleSubmit}>
            <input
              name="search"
              type="text"
              // value={search}
              onChange={handleChange}
              className="input-search"
              placeholder="Search movie..."
            />
          </form>

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
