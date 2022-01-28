import SpotifyWebApi from "spotify-web-api-js";
import Spotify from "spotify-web-api-js";
import randomstring from "randomstring";

export interface SpotifyQueryParams {
  client_id: string;
  response_type: "code";
  redirect_uri: string; //The URI to redirect to after the user grants or denies permission.
  state?: string;
  scope?: string;
  show_dialog?: boolean;
}

export const spotify = new Spotify();
export const spotifyApi = new SpotifyWebApi();

/* 
Necessary information
https://developer.spotify.com/documentation/general/guides/authorization/code-flow/#:~:text=A%20token%20that%20can%20be,Access%20Token%20will%20be%20returned.
*/
export const authQueryParams: SpotifyQueryParams = {
  client_id: `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}`,
  response_type: "code",
  redirect_uri: "http://localhost:3000/landing",
  state: randomstring.generate(16),
  scope:
    "ugc-image-upload user-read-playback-state user-modify-playback-state user-read-private user-follow-modify user-follow-read user-library-modify user-library-read streaming user-read-playback-position playlist-modify-private playlist-read-collaborative app-remote-control user-read-email playlist-read-private user-top-read playlist-modify-public user-read-currently-playing user-read-recently-played",
  show_dialog: true,
};
