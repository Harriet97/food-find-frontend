
let searchUrl = 'https://developers.zomato.com/api/v2.1/search?q='


export const getRestaurantsFetch = () => {
    return fetch(searchUrl, {
        method: "GET",
        headers: {
        "user-key": 'ab7bd7822dfc651cfa6f0b4f23152241'
        }
      })
      .then(response => response.json())
}

