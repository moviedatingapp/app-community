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

  // Handle when a community is selected
  const handleCommunitySelect = (communityName: string) => {
    setSelectedCommunity(communityName); // Update selected community
    setIsSearchBar(false); // Close search bar after selecting
  };

  // Handle changing selected community
  const handleChangeCommunity = () => {
    setIsSearchBar(true); // Open the search bar to change the community
  };

  return (
    <div>
      {/* Show SearchBar only when it's active */}
      {!isSearchBar && selectedCommunity ? (
        // Display the selected community only if no search bar is open
        <div
          className="flex flex-row gap-2 items-center text-16 font-BH-Satoshi-medium px-4 py-2 bg-light-grey rounded-56 cursor-pointer"
          onClick={handleChangeCommunity} // Click on selected community to change it
        >
          {selectedCommunity}
          <Image
            src={"/assets/icons/chevron-down.svg"}
            alt="arrow-down"
            height={20}
            width={20}
            className={`transform transition-transform duration-200 select-none `}
          />
        </div>
      ) : (
        // Button that triggers search bar opening when no community is selected
        <button
          type="button"
          className="flex flex-row gap-14 items-center text-16 font-BH-Satoshi-medium px-4 py-2 bg-light-grey rounded-56"
          onClick={() => setIsSearchBar(true)} // Open search bar if no community is selected
        >
          {selectedCommunity ? selectedCommunity : "Select a community"}
          <Image
            src={"/assets/icons/chevron-down.svg"}
            alt="arrow-down"
            height={20}
            width={20}
            className={`transform transition-transform duration-200 select-none `}
          />
        </button>
      )}

      {/* Show SearchBar only when it's active */}
      {isSearchBar && (
        <SearchBar
          onClose={handleCloseSearchBar}
          onCommunitySelect={handleCommunitySelect}
        />
      )}
    </div>
  );
}
