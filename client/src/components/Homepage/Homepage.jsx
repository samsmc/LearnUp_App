import React from "react";
import { useNavigate } from "react-router-dom";
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
  activities,
  setActivities,
  type,
  randomActivities,
  isLoading,
  singleRandomActivity,
  setType,
}) => {
  const classes = useStyles();

  let navigate = useNavigate();

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
                  variant="outlined"
                  onClick={() => setActivities(randomActivities)}
                >
                  Random
                </Button>

                <Button
                  className={classes.imBoredButton}
                  variant="outlined"
                  onClick={() => setActivities(singleRandomActivity)}
                >
                  I'm Bored
                </Button>
                <Button
                  className={classes.randomButton}
                  variant="contained"
                  onClick={() => {
                    navigate("/table");
                  }}
                >
                  Full list
                </Button>

                <List activities={activities} />
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
