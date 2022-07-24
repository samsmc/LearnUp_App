import React from "react";
import { Grid, Typography, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "../Homepage/styles-homepage";
import ActivityDetails from "../ActivityDetails/ActivityDetails";

const Search = ({ searchActivity, setSearchActivity, allActivities }) => {
  const classes = useStyles();

  const filteredActivities = allActivities.filter((activities) => {
    if (searchActivity === "") {
      return;
    } else if (
      activities.activity.toLowerCase().includes(searchActivity.toLowerCase())
    ) {
      return activities;
    }
  });

  return (
    <>
      <Grid
        container
        spacing={4}
        style={{ width: "100%" }}
        justifyContent="center"
      >
        <Grid item xs={12} md={10}>
          <div className={classes.container}>
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
            <Typography variant="h4">Find activities by name!</Typography>

            <Grid container spacing={5} className={classes.list}>
              {filteredActivities.map((activity, i) => {
                return (
                  <Grid item xs={12} md={5} key={i}>
                    <ActivityDetails activity={activity} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
