const jsonify = response => response.json();
const baseURL = "http://localhost:3000";
const signInURL = `${baseURL}/sign-in`;
const signUpURL = `${baseURL}/users`;
const validateURL = `${baseURL}/validate`;
const addFavURL = `${baseURL}/restaurants`;
const searchURL = "https://developers.zomato.com/api/v2.1/search?q=";
const locationUrl = "https://developers.zomato.com/api/v2.1/search?";
const cuisineURL = "https://developers.zomato.com/api/v2.1/cuisines?";

const restaurantShowURL =
  "https://developers.zomato.com/api/v2.1/restaurant?res_id=";

const removeFavURL = `${baseURL}/unfavourite`;

const searchRestaurants = (location, search) => {
  return fetch(
    `${locationUrl}lat=${location.latitude}&lon=${location.longitude}&cuisine=${search}`,
    {
      method: "GET",
      headers: {
        "user-key": "ab7bd7822dfc651cfa6f0b4f23152241"
      }
    }
  ).then(jsonify);
};
const getCuisines = location => {
  return fetch(
    `${cuisineURL}lat=${location.latitude}&lon=${location.longitude}`,
    {
      method: "GET",
      headers: {
        "user-key": "ab7bd7822dfc651cfa6f0b4f23152241"
      }
    }
  ).then(jsonify);
};

const localRestaurants = location => {
  console.log(location);
  return fetch(
    `${locationUrl}lat=${location.latitude}&lon=${location.longitude}`,
    {
      method: "GET",
      headers: {
        "user-key": "ab7bd7822dfc651cfa6f0b4f23152241"
      }
    }
  ).then(jsonify);
};

const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url);
};

const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch(url, configurationObject);
};
const signIn = data => {
  return post(signInURL, data).then(jsonify);
};
const validate = token => {
  return get(validateURL, token).then(jsonify);
};
const signUp = body => {
  return post(signUpURL, body).then(resp => resp.json());
};

const addFavourite = body => {
  return post(addFavURL, body).then(jsonify);
};

const getRestaurant = id => {
  return fetch(`${restaurantShowURL}${id}`, {
    method: "GET",
    headers: {
      "user-key": "ab7bd7822dfc651cfa6f0b4f23152241"
    }
  }).then(jsonify);
};

const destroyFavourite = data => {
  return fetch(`${removeFavURL}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

export default {
  getCuisines,
  signUp,
  signIn,
  validate,
  searchRestaurants,
  localRestaurants,
  addFavourite,
  getRestaurant,
  destroyFavourite
};

// source ~/.bashrc
