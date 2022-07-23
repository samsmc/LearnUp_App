import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@material-ui/core";
import ActivityDetails from "../ActivityDetails/ActivityDetails";

import useStyles from "./list-styles";

const List = ({
  allActivities,
  activities,
  setActivities,
  type,
  randomActivities,
  singleRandomActivity,
  searchActivity,
  setSearchActivity,
  isLoading,
  setType,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Many activities to learn and discover!
      </Typography>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="education">education</MenuItem>
              <MenuItem value="recreational">recreational</MenuItem>
              <MenuItem value="social">social</MenuItem>
              <MenuItem value="diy">diy</MenuItem>
              <MenuItem value="charity">charity</MenuItem>
              <MenuItem value="cooking">cooking</MenuItem>
              <MenuItem value="relaxation">relaxation</MenuItem>
              <MenuItem value="music">music</MenuItem>
              <MenuItem value="busywork">busywork</MenuItem>
            </Select>
          </FormControl>

          <Button
            className={classes.randomButton}
            variant="contained"
            onClick={() => setActivities(randomActivities)}
          >
            Mixed
          </Button>

          <Button
            className={classes.randomButton}
            variant="contained"
            onClick={() => setActivities(singleRandomActivity)}
          >
            Random
          </Button>

          {type.length > 0 ? (
            <Grid container spacing={5} className={classes.list}>
              {activities?.map((activity, i) => {
                return (
                  <Grid item xs={12} md={5} key={i}>
                    <ActivityDetails activity={activity} />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Grid container spacing={5} className={classes.list}>
              {randomActivities?.map((activity, i) => {
                return (
                  <Grid item xs={12} md={5} key={i}>
                    <ActivityDetails activity={activity} />
                  </Grid>
                );
              })}
            </Grid>
          )}

          {allActivities.filter((activities) => {
              if (searchActivity === '') {
                return;
              }
              else if (activities.activity.toLowerCase().includes(searchActivity.toLowerCase())){
                return activities;
              }
            }).map((activity, i) => {
              return (
                <Grid item xs={12} md={5} key={i}>
                    <ActivityDetails activity={activity} />
                </Grid>
          )})}
        </>
      )}
    </div>
  );
};

export default List;
