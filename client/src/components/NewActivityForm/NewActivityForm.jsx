import { useEffect, useState } from "react";
import axios from "axios";
import {
  getAllActivities,
  getActivitiesByType,
  getRandomActivities,
  getSinlgeRandomActivity,
  getAllLocalActivities,
  saveNewActivity,
} from "../../api";

import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

// import Register from "./components/Register";
// import Login from "./components/Login";

import "./form.css";

function NewActivityForm({ type, setType }) {
  const myStorage = window.localStorage;

  const [activityToCreate, setActivityToCreate] = useState({
    activity: "",
    accessibility: 0,
    price: 0,
    participants: 0,
    type: "",
  });
  const [currentActivities, setCurrentActivities] = useState([]);
  // const [title, setTitle] = useState("");
  // const [accessibility, setAccessibility] = useState("");
  // const [participants, setParticipants] = useState();
  // const [price, setPrice] = useState();
  // const [selectType, setSelectType] = useState(0);

  /* const [currentUsername, setCurrentUsername] = useState(
    myStorage.getItem("user")
  ); */

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const newActivity = {
      title,
      accessibility,
      price,
      participants,
      selectType,
      // username: currentUsername,
    }; */

    try {
      const res = await axios.post(
        "http://127.0.0.1:8800/api/activities",
        activityToCreate /* newActivity */
      );
      setCurrentActivities([...currentActivities, res.data]);
      // setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log({ currentActivities });
  // console.log({ activityToCreate });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setActivityToCreate({
      ...activityToCreate,
      [event.target.name]: event.target.value,
    });
  };

  /* const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("user");
  }; */

  return (
    <div className="App">
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Create a New Activity
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Help other bored ones!
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    name="activity"
                    placeholder="Enter activity name"
                    label="Activity"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={
                      handleInputChange /* (e) => setTitle(e.target.value) */
                    }
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="number"
                    placeholder="Enter number of participants"
                    label="Participants"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={
                      handleInputChange /* (e) => setParticipants(e.target.value) */
                    }
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="number"
                    placeholder="Enter an accessibility number"
                    label="Accessibility"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={
                      handleInputChange /* (e) => setAccessibility(e.target.value) */
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter price"
                    label="Price"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={
                      handleInputChange /* (e) => setPrice(e.target.value) */
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl /* className={classes.formControl} */>
                    <InputLabel>Type</InputLabel>
                    <Select
                      value={type}
                      onChange={
                        handleInputChange /* (e) => setType(e.target.value) */
                      }
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
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default NewActivityForm;
