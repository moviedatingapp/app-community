import React from "react";
import Image from "next/image";

export default function CommunityDropdown() {
  return (
    <div>
      {/* TODO: Make it a select dropdown */}
      <button
        type="button"
        className="flex flex-row gap-14 items-center text-16 font-BH-Satoshi-medium px-4 py-2 bg-light-grey rounded-56"
      >
        Select a community
        <Image
          src={"/assets/icons/chevron-down.svg"}
          alt="arrow-down"
          height={20}
          width={20}
          className={`transform transition-transform duration-200 select-none `}
        />
      </button>
    </div>
  );
}
