"use client";
import React, { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { communityList } from "@/data/dummyData";

export default function SearchBar({
  onClose,
  onCommunitySelect,
}: {
  onClose: () => void;
  onCommunitySelect: (community: string) => void;
}) {
  const { register, setValue, watch } = useFormContext();
  const searchQuery = watch("searchQuery", "");
  //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter community list based on search query, but show all if the search is empty
  const filteredCommunities = searchQuery
    ? communityList.filter((item) =>
        item.communityName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : communityList;

  // Close the search bar if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        onClose(); // Close the search and revert to "Select a community"
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={searchRef}
      className="outline-none px-5 bg-light-grey w-72 rounded-56 flex hover:bg-light-grey-border relative"
    >
      <Image
        src="/assets/icons/search.svg"
        alt="search-icon"
        width={20}
        height={20}
      />
      <input
        type="text"
        {...register("searchQuery")}
        className="outline-none w-116 h-8 bg-transparent px-2 py-5 rounded-56 placeholder:text-dark-grey placeholder:font-BH-Satoshi-light text-dark-grey font-BH-Satoshi-medium"
        placeholder="Search"
        onChange={(e) => setValue("searchQuery", e.target.value)}
      />
      {searchQuery && (
        <div className="absolute shadow-drop-down-shadow bg-white-primary h-96 flex flex-col gap-8 overflow-scroll z-30 right-2 top-12 w-60">
          {filteredCommunities.length > 0 ? (
            filteredCommunities.map((item) => (
              <div
                key={item.communityId}
                className="p-2 font-BH-Satoshi-medium hover:bg-light-grey select-none cursor-pointer"
                onClick={() => {
                  onCommunitySelect(item.communityName); // Pass the selected community to the parent
                  onClose(); // Close search after selection
                }}
              >
                {item.communityName}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No communities found</div>
          )}
        </div>
      )}

      {/* Show all communities when the search bar is empty */}
      {!searchQuery && (
        <div className="absolute shadow-drop-down-shadow bg-white-primary h-96 flex flex-col gap-8 overflow-scroll z-30 right-2 top-12 w-60">
          {communityList.map((item) => (
            <div
              key={item.communityId}
              className="p-2 font-BH-Satoshi-medium hover:bg-light-grey select-none cursor-pointer"
              onClick={() => {
                onCommunitySelect(item.communityName); // Pass the selected community to the parent
                onClose(); // Close search after selection
              }}
            >
              {item.communityName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
