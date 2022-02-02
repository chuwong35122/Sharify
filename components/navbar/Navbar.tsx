import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import SpotifyLogo from "../../public/images/spotify-logo.svg";

type NavigationPage = "home" | "session" | "contact";

function Navbar() {
  const router = useRouter();

  const [navigation, setNavigation] = useState<NavigationPage>("home");
  const navClass = "text-white hover:cursor-pointer";
  const selectedNavClass =
    "text-white underline underline-offset-4 hover:cursor-pointer";

  return (
    <div className="w-full h-12 absolute top-0 flex flex-row justify-between px-4 my-2">
      <div className="flex flex-row justify-start items-center w-[33%]">
        <div className="text-white text-xl font-bold cursor-pointer">
          Sharify
        </div>
        <Image
          src={SpotifyLogo}
          alt="spotify-logo"
          width="60"
          height="60"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-row justify-evenly items-center w-[33%]">
        <div
          className={navigation === "home" ? selectedNavClass : navClass}
          onClick={() => {
            router.push("/landing");
            setNavigation("home");
          }}
        >
          Home
        </div>
        <div
          className={navigation === "session" ? selectedNavClass : navClass}
          onClick={() => {
            router.push("/session");
            setNavigation("session");
          }}
        >
          Session
        </div>
        <div
          className={navigation === "contact" ? selectedNavClass : navClass}
          onClick={() => {
            router.push("/contact");
            setNavigation("contact");
          }}
        >
          Contact
        </div>
      </div>

      <div className="flex flex-row justify-end items-center w-[33%]">
        <div className="cursor-pointer">
          <Image
            src={SpotifyLogo}
            alt="profile-picture"
            width="80"
            height="80"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
