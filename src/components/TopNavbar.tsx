import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

export default function TopNavbar() {
  return (
    <header className=" h-12">
      <nav className="flex justify-between items-center  py-2 border-b-light-grey-border border-b px-8">
        <div>
          {/* <Image src={'/assets/images/yato-image.jpg'} alt="logo" height={} width={}/> */}
          <h1>LOGO</h1>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <ul className="flex gap-8">
            <li className=" h-10 w-10 rounded-full hover:bg-light-grey flex items-center justify-center">
              <Image
                src={"/assets/icons/bell.svg"}
                alt="bell-icon"
                height={20}
                width={20}
                className=" object-contain"
              />
            </li>
            <li className=" h-10 w-10 rounded-full hover:bg-light-grey flex items-center justify-center">
              <Image
                src={"/assets/images/yato-image.jpg"}
                alt="profile-image"
                height={30}
                width={30}
                className="rounded-full object-contain"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
