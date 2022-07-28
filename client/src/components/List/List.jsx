import React from "react";
import { Grid } from "@material-ui/core";
import ActivityDetails from "../ActivityDetails/ActivityDetails";

import useStyles from "./styles-list";

const List = ({ activities }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={5} alignItems="center" justifyContent="center" className={classes.list}>
        {activities?.map((activity, i) => {
          return (
            <Grid item xs={12} md={5} key={i}>
              <ActivityDetails activity={activity} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default List;
