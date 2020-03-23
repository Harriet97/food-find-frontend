const baseURL = "http://localhost:3000";
const signInURL = `${baseURL}/sign-in`;
const validateURL = `${baseURL}/validate`;
// Make a post request to a given URL with a given data object as the body and return the Promise
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
  return post(signInURL, data).then(response => response.json());
};
const validate = token => {
  return get(validateURL, token).then(response => response.json());
};

export default { signIn, validate };
