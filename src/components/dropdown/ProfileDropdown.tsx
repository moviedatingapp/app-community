import { profileMenuItems } from "@/data";
import React from "react";
import Image from "next/image";
import { ProfileMenuItemsType } from "@/data/types";

export default function ProfileDropdown() {
  return (
    <div
      className="h-auto w-60 top-12 rounded-br-10 rounded-bl-10 absolute shadow-drop-down-shadow py-4 px-6 right-0 flex flex-col gap-8"
      //   ref={dropdownRef}
    >
      {profileMenuItems.map((menuitem: ProfileMenuItemsType, index) => (
        <div
          key={index}
          className="flex gap-12 py-2 hover:bg-light-grey-secondary cursor-pointer hover:rounded-8"
        >
          <Image
            src={menuitem.menuItemIcon}
            alt="profile-image"
            height={25}
            width={25}
            className="rounded-full object-contain"
          />
          <span className="capitalize font-BH-Satoshi-regular">
            {menuitem.menuItemName}
          </span>
        </div>
      ))}
    </div>
  );
}
