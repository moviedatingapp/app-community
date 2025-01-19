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
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredCommunities = searchQuery
    ? communityList.filter((item) =>
        item.communityName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : communityList;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        onClose();
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
      className={`outline-none px-5 bg-light-grey w-72 rounded-56 flex hover:bg-light-grey-border relative ${
        isTyping
          ? "outline-2 outline-blue-primary outline-offset-[-2px] bg-light-grey-border"
          : "active:outline-2 active:outline-blue-primary active:outline-offset-[-2px] focus-within:outline-blue-primary focus-within:outline-offset-[-2px]"
      }`}
      onClick={() => setIsTyping(true)}
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
        onBlur={(e) => {
          if ((e.target as HTMLInputElement).value.length === 0) {
            setIsTyping(false);
          }
        }}
      />
      {searchQuery && (
        <div className="absolute shadow-drop-down-shadow bg-white-primary h-96 flex flex-col gap-8 overflow-scroll z-30 right-2 top-12 w-60">
          {filteredCommunities.length > 0 ? (
            filteredCommunities.map((item) => (
              <div
                key={item.communityId}
                className="p-2 font-BH-Satoshi-medium hover:bg-light-grey select-none cursor-pointer"
                onClick={() => {
                  onCommunitySelect(item.communityName);
                  onClose();
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

      {!searchQuery && (
        <div className="absolute shadow-drop-down-shadow bg-white-primary h-96 flex flex-col gap-8 overflow-scroll z-30 right-2 top-12 w-60">
          {communityList.map((item) => (
            <div
              key={item.communityId}
              className="p-2 font-BH-Satoshi-medium hover:bg-light-grey select-none cursor-pointer"
              onClick={() => {
                onCommunitySelect(item.communityName);
                onClose();
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
