import secret from "./secret";

const scopes = [
  "user-read-private",
  "user-read-birthdate",
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative"
].join(" ");

const clientID = secret;
const responseType = "token";
const redirectURI = "http://localhost:3000/login";

export const spotifyURI = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=${responseType}&redirect_uri=${redirectURI}&scope=${scopes}`;
