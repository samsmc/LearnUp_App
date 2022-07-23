import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import {
  getAllActivities,
  getActivitiesByType,
  getRandomActivities,
  getSinlgeRandomActivity,
} from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [randomActivities, setRandomActivities] = useState([]);
  const [singleRandomActivity, setSingleRandomActivity] = useState([]);

  const [searchActivity, setSearchActivity] = useState([]);
  // const [filteredActivities, setFilteredActivities] = useState([]);

  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // só qd carrega a página
  useEffect(() => {
    getAllActivities().then((data) => {
      setAllActivities(data);
    });
  }, []);

  useEffect(() => {
    getRandomActivities().then((data) => {
      setRandomActivities(data);
    });
  }, []);

  useEffect(
    (singleRandomActivity) => {
      getSinlgeRandomActivity().then((data) => {
        setSingleRandomActivity(data);
      });
    },
    [singleRandomActivity]
  );

  useEffect(() => {
    getActivitiesByType(type).then((data) => {
      setActivities(data);
      /* setActivities(data?.filter((activity) => activity.activity && activity.price <= 0));
      setFilteredActivities([]) */
      setIsLoading(false);
    });
  }, [type]);

  /* console.log({activities}) 
  allActivities.map((val, key) => {
        return console.log(allActivities.name);
      });*/

  return (
    <>
      <CssBaseline />
      <Header
        allActivities={allActivities}
        searchActivity={searchActivity}
        setSearchActivity={setSearchActivity}
      />
      <Grid
        container
        spacing={4}
        style={{ width: "100%" }}
        justifyContent="center"
      >
        <Grid item xs={12} md={10}>
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
            price={price}
            setPrice={setPrice}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
