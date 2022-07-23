import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./header-styles";

const Header = ({ allActivities, setSearchActivity }) => {
  const classes = useStyles();

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

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              onChange={(e) => {
                setSearchActivity(e.target.value);
              }}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
