"use client";
import {
  dropDownMenuItems,
  DropDownMenuItemsType,
  menuItems,
  MenuItemsType,
} from "@/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function SideNavbar() {
  // Manage the state for each dropdown's open/close individually
  const [openDropdowns, setOpenDropdowns] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => (prev === index ? null : index)); // Toggle the dropdown
  };

  return (
    <nav className="h-[calc(100vh-3.5rem)] sticky left-0 mt-2 w-64 border-r border-light-grey-border flex flex-col items-center justify-start">
      {/* Menu Items */}
      <div className="flex justify-center items-center w-11/12">
        <ul className="w-full py-4 border-b border-light-grey-border-secondary">
          {menuItems.map((menuItem: MenuItemsType, index) => (
            <Link key={index} href={menuItem.menuItemLink}>
              <li className="flex gap-12 justify-start items-center hover:bg-light-grey-secondary active:bg-light-grey py-2 px-4 rounded-8 cursor-pointer">
                <Image
                  src={menuItem.menuItemImageLink}
                  alt={menuItem.menuItemImageAltName}
                  width={20}
                  height={20}
                />
                <span className="font-BH-Satoshi-regular capitalize">
                  {menuItem.menuItemName}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Dropdown Menu Items */}
      <div className="flex justify-center items-center w-11/12">
        <div className="w-full">
          {dropDownMenuItems.map((menuItem: DropDownMenuItemsType, index) => (
            <div
              key={index}
              className="border-b border-light-grey-border-secondary py-4"
            >
              {/* Dropdown Header */}
              <div
                className="flex justify-between items-center px-5 hover:bg-light-grey-secondary py-2 rounded-8 cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <span className="text-grey-primary uppercase">
                  {menuItem.menuItemName}
                </span>
                <Image
                  src={"/assets/icons/chevron-down.svg"}
                  alt="arrow-down"
                  height={20}
                  width={20}
                  className={`transform transition-transform duration-200 ${
                    openDropdowns === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Dropdown Items */}
              {openDropdowns === index && (
                <ul className="mt-2 px-6">
                  {menuItem.subMenuItems?.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-1">
                      {/* <Link href={subItem.subMenuItemLink}>
                        <a className="block text-grey-primary hover:bg-light-grey-secondary px-4 py-2 rounded-8">
                          {subItem.subMenuItemName}
                        </a>
                      </Link> */}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
