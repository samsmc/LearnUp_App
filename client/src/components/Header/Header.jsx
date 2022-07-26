import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles-header";

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          <Link to="/" className={classes.Linktitle}>LearnUp</Link>
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new activities
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>
          </div>
        </Box>
        <Button
          component={Link}
          to="/search"
          variant="contained"
          color="primary"
        >
          <SearchIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
