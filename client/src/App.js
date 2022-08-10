import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import {
  getAllActivities,
  getActivitiesByType,
  getRandomActivities,
  getSinlgeRandomActivity,
  getAllLocalActivities,
} from "./api";
import Header from "./components/Header/Header";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/Search/Search";
import TableContent from "./components/ActivitiesTable/TableContent";
import Register from "./components/userRegistration/Register";
import Login from "./components/userRegistration/Login";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [randomActivities, setRandomActivities] = useState([]);
  const [singleRandomActivity, setSingleRandomActivity] = useState([]);
  const [allLocalActivities, setAllLocalActivities] = useState([]);

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
    setIsLoading(true);
    getActivitiesByType(type).then((data) => {
      setActivities(data);
      setIsLoading(false);
    });
  }, [type]);

  useEffect(() => {
    getAllLocalActivities().then((data) => {
      setAllLocalActivities(data);
    });
  }, []);

  let mergedActivitiesData = allActivities.concat(allLocalActivities);

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
                activities={activities}
                setActivities={setActivities}
                type={type}
                randomActivities={randomActivities}
                isLoading={isLoading}
                singleRandomActivity={singleRandomActivity}
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
                mergedActivitiesData={mergedActivitiesData}
              />
            }
          />
          <Route
            path="/table"
            element={
              <TableContent
                allActivities={allActivities}
                mergedActivitiesData={mergedActivitiesData}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
