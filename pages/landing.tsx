import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import { authQueryParams } from "../lib/spotify";
import querystring from "query-string";

import SpotifyLogo from "../public/images/spotify-logo.svg";
import Navbar from "../components/navbar/Navbar";

function Landing() {
  const router = useRouter();

  function handleSpotifyAuth() {
    router.push(
      `https://accounts.spotify.com/authorize?${querystring.stringify(
        authQueryParams
      )}`
    );
  }

  return (
    <>
      <Navbar />
      {/* <Button
        variant="contained"
        onClick={handleSpotifyAuth}
        endIcon={
          <Image
            src={SpotifyLogo}
            alt="spotify-logo"
            width="70"
            height="70"
            objectFit="contain"
          />
        }
      >
        Login with
      </Button> */}
    </>
  );
}

export default Landing;
