import axios from "axios";

export const getAllActivities = async (type) => {
  const URL = "https://bored-api.firebaseapp.com/api/activity/list";
  try {
    const data = await axios.get(URL);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActivitiesByType = async (type) => {
  const URL = `https://bored-api.firebaseapp.com/api/activity?type=${type}`;
  try {
    const data = await axios.get(URL);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRandomActivities = async () => {
  const limit = 10;
  const URL = `https://bored-api.firebaseapp.com/api/activity/list/${limit}`;
  try {
    const data = await axios.get(URL, limit);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSinlgeRandomActivity = async () => {
  const URL = "https://bored-api.firebaseapp.com/api/activity";

  try {
    const data = await axios.get(URL);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

//local DB
export const getAllLocalActivities = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8800/api/activities");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveNewActivity = async () => {
  try {
    const res = await axios.post("http://127.0.0.1:8800/api/activities");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
