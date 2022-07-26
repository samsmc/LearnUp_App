import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import {
  getAllActivities,
  getActivitiesByType,
  getRandomActivities,
  getSinlgeRandomActivity,
} from "./api";
import Header from "./components/Header/Header";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/Search/Search";
import TableContent from "./components/ActivitiesTable/TableContent";

import "./styles-App.css";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [randomActivities, setRandomActivities] = useState([]);
  const [singleRandomActivity, setSingleRandomActivity] = useState([]);

  const [searchActivity, setSearchActivity] = useState("");

  const [type, setType] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllActivities().then((data) => {
      setAllActivities(data);
    });
  }, [searchActivity]);

  useEffect(() => {
    getRandomActivities().then((data) => {
      setRandomActivities(data);
    });
  }, [randomActivities]);

  useEffect(() => {
    getSinlgeRandomActivity().then((data) => {
      setSingleRandomActivity(data);
    });
  }, [singleRandomActivity]);

  useEffect(() => {
    getActivitiesByType(type).then((data) => {
      setActivities(data);
      /* setActivities(data?.filter((activity) => activity.activity && activity.price <= 0));
      setFilteredActivities([]) */
      setIsLoading(false);
    });
  }, [type]);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
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
            }
          />
          <Route
            path="/search"
            element={
              <Search
                allActivities={allActivities}
                searchActivity={searchActivity}
                setSearchActivity={setSearchActivity}
              />
            }
          />
          {/* <Route
            path="/content"
            element={<Content allActivities={allActivities} />}
          /> */}
          <Route
            path="/table"
            element={<TableContent allActivities={allActivities} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
