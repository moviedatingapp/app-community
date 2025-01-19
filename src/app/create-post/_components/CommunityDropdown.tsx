"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function CommunityDropdown() {
  const [isSearchBar, setIsSearchBar] = useState<boolean>(false);
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(
    null
  );

  const handleCloseSearchBar = () => {
    setIsSearchBar(false);
  };

  const handleCommunitySelect = (communityName: string) => {
    setSelectedCommunity(communityName);
    setIsSearchBar(false);
  };

  const handleChangeCommunity = () => {
    setIsSearchBar(true);
  };

  return (
    <div>
      {!isSearchBar ? (
        <div
          className="flex flex-row justify-between items-center text-16 w-56 font-BH-Satoshi-medium px-4 py-2 bg-light-grey rounded-56 cursor-pointer"
          onClick={handleChangeCommunity}
        >
          {selectedCommunity ? selectedCommunity : "Select a community"}
          <Image
            src={"/assets/icons/chevron-down.svg"}
            alt="arrow-down"
            height={20}
            width={20}
            className={`transform transition-transform duration-200 select-none `}
          />
        </div>
      ) : (
        <SearchBar
          onClose={handleCloseSearchBar}
          onCommunitySelect={handleCommunitySelect}
        />
      )}
    </div>
  );
}
