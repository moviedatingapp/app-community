"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProfileDropdown from "./dropdown/ProfileDropdown";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function TopNavbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const dropdownRef = useClickOutside<HTMLLIElement>(() =>
    setOpenDropdown(null)
  );

  return (
    <header className=" h-12 sticky top-0">
      <nav className="flex justify-between items-center py-2 border-b-light-grey-border border-b px-8">
        <div>
          <h1 className=" select-none">LOGO</h1>
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
                className=" object-contain select-none"
              />
            </li>
            <li className=" h-10 rounded-56 hover:bg-light-grey flex items-center justify-center px-2 gap-4 cursor-pointer">
              <Image
                src={"/assets/icons/plus.svg"}
                alt="plus-icon"
                height={25}
                width={25}
                className=" object-contain select-none"
              />
              <span className="font-BH-Satoshi-medium select-none">Create</span>
            </li>
            <li className=" h-10 w-10 rounded-full hover:bg-light-grey flex items-center justify-center cursor-pointer">
              <Image
                src={"/assets/icons/bell.svg"}
                alt="bell-icon"
                height={20}
                width={20}
                className=" object-contain select-none"
              />
            </li>
            <li
              className=" h-10 w-10 rounded-full hover:bg-light-grey flex items-center justify-center cursor-pointer relative"
              onClick={() => handleDropdown("profile")}
              ref={dropdownRef}
            >
              <Image
                src={"/assets/images/yato-image.jpg"}
                alt="profile-image"
                height={30}
                width={30}
                className="rounded-full object-contain"
              />
              <div className=" absolute h-2 w-2 rounded-full right-1 border border-white-primary bg-green-online bottom-1"></div>
              {openDropdown === "profile" && <ProfileDropdown />}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
