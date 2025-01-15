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
          <ul className="flex gap-4">
            <li className=" h-10 w-10 rounded-full hover:bg-light-grey flex items-center justify-center cursor-pointer">
              <Image
                src={"/assets/icons/message-circle-more.svg"}
                alt="message-icon"
                height={20}
                width={20}
                className=" object-contain"
              />
            </li>
            <li className=" h-10 rounded-56 hover:bg-light-grey flex items-center justify-center px-2 gap-4 cursor-pointer">
              <Image
                src={"/assets/icons/plus.svg"}
                alt="plus-icon"
                height={25}
                width={25}
                className=" object-contain"
              />
              <span className="font-BH-Satoshi-medium">Create</span>
            </li>
            <li className=" h-10 w-10 rounded-full hover:bg-light-grey flex items-center justify-center cursor-pointer">
              <Image
                src={"/assets/icons/bell.svg"}
                alt="bell-icon"
                height={20}
                width={20}
                className=" object-contain"
              />
            </li>
            <li className=" h-10 w-10 rounded-full hover:bg-light-grey flex items-center justify-center cursor-pointer relative">
              <Image
                src={"/assets/images/yato-image.jpg"}
                alt="profile-image"
                height={30}
                width={30}
                className="rounded-full object-contain"
              />
              <div className="absolute h-2 w-2 rounded-full right-1 border border-white-primary bg-green-online bottom-1"></div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
