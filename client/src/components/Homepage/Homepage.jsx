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

import List from "../List/List";

import useStyles from "./styles-homepage";

const Homepage = ({
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
    <>
      <Grid
        container
        spacing={4}
        style={{ width: "100%" }}
        justifyContent="center"
      >
        <Grid item xs={12} md={10}>
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
                  <Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
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
                <List
                  allActivities={allActivities}
                  searchActivity={searchActivity}
                  setSearchActivity={setSearchActivity}
                  activities={
                    /* filteredActivities.lenght ? filteredActivities : */ activities
                  }
                  setActivities={setActivities}
                  randomActivities={randomActivities}
                  singleRandomActivity={singleRandomActivity}
                  type={type}
                  isLoading={isLoading}
                  setType={setType}
                />
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
