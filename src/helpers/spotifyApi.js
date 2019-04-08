const fetchSpotifyApi = url => {
  let authToken = localStorage.getItem("nineteenAuthToken");

  let promise = fetch(`https://api.spotify.com/v1${url}`, {
    headers: {
      Authorization: authToken
    }
  }).then(response => response.json());

  return promise;
};

export { fetchSpotifyApi };
