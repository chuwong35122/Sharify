import React from "react";
import Image from "next/image";

import SpotifyLogo from "../../public/images/spotify-logo.svg";

function Navbar() {
  return (
    <div className="w-full h-12 absolute top-0 flex flex-row justify-between px-4 my-2">
      <div className="flex flex-row justify-start items-center w-[33%]">
        <div className="text-white text-xl font-bold">Sharify</div>
        <Image
          src={SpotifyLogo}
          alt="spotify-logo"
          width="60"
          height="60"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-row justify-evenly items-center w-[33%]">
        <div className="text-white">Home</div>
        <div className="text-white">Session</div>
        <div className="text-white">Contact</div>
      </div>

      <div className="flex flex-row justify-end items-center w-[33%]">
        <Image
          src={SpotifyLogo}
          alt="profile-picture"
          width="80"
          height="80"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Navbar;
