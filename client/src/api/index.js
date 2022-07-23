import axios from "axios";


export const getAllActivities = async (type) => {
  const URL = 'https://bored-api.firebaseapp.com/api/activity/list';
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

//  = async (type, sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(
//       `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
//       {
//         params: {
//           bl_latitude: sw.lat /* bottom left */,
//           tr_latitude: ne.lat /* top right */,
//           bl_longitude: sw.lng,
//           tr_longitude: ne.lng,
//         },
//         headers: {
//           "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
//           "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//         },
//       }
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getWeatherData = async (lat, lng) => {
//   try {
//     const { data } = await axios.get(
//       "https://community-open-weather-map.p.rapidapi.com/weather",
//       {
//         params: { lat: lat, lon: lng },
//         headers: {
//           "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
//           "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
//         },
//       }
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
