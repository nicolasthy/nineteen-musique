const fetchSpotifyApi = (url, value = true) => {
  let authToken = localStorage.getItem("nineteenAuthToken");
  let spotifyURI = value ? `https://api.spotify.com/v1${url}` : url;

  let promise = fetch(spotifyURI, {
    headers: {
      Authorization: authToken
    }
  }).then(response => response.json());

  return promise;
};

export { fetchSpotifyApi };
