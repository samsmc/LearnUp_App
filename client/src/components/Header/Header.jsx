import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./header-styles";

function Header() {
  const classes = useStyles();
  // let navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          LearnUp
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new activities
          </Typography>

          <Link to="/">HOME</Link>
          <Link to="/table">table</Link>
          {/* <Link to="/use-table">USE</Link> */}

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {/* <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              onChange={(e) => {
                setSearchActivity(e.target.value);
              }}
            /> */}
            </div>
          </div>
        </Box>
        <Button
          component={Link}
          to="/search"
          variant="contained"
          color="primary"
        >
          search
          <SearchIcon />
        </Button>

        {/* <Button
          variant="contained"
          onClick={() => {
            navigate("/search");
          }}
        >
          search
          <SearchIcon />
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
