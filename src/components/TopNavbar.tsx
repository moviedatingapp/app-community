import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

export default function TopNavbar() {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <div>
          {/* <Image src={'/assets/images/yato-image.jpg'} alt="logo" height={} width={}/> */}
          <h1>LOGO</h1>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <Image
            src={"/assets/images/yato-image.jpg"}
            alt="profile-image"
            height={50}
            width={50}
          />
        </div>
      </nav>
    </header>
  );
}
