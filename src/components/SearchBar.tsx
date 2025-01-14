"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function SearchBar() {
  const { register } = useForm();
  const [isTyping, setIsTyping] = useState<boolean>(false);

  return (
    <div>
      <form>
        <div
          className={`outline-none px-5 bg-light-grey w-116 rounded-56 flex hover:bg-light-grey-border ${
            isTyping
              ? "border-2 border-blue-primary bg-light-grey-border"
              : "active:border-2 active:border-blue-primary focus-within:border-blue-primary"
          }`}
          onClick={() => setIsTyping(true)}
        >
          <Image
            src={"/assets/icons/search.svg"}
            alt="search-icon"
            width={20}
            height={20}
          />
          <input
            type="text"
            {...register("search")}
            className="outline-none w-116 h-8 bg-transparent px-2 py-5 rounded-56 placeholder:text-dark-grey placeholder:font-BH-Satoshi-light text-dark-grey font-BH-Satoshi-medium"
            placeholder="Search"
            // onInput={() => setIsTyping(true)}
            onBlur={(e) => {
              if ((e.target as HTMLInputElement).value.length === 0) {
                setIsTyping(false);
              }
            }}
          />
        </div>
      </form>
    </div>
  );
}
