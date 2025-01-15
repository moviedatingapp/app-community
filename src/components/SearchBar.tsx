"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const [isTyping, setIsTyping] = useState<boolean>(false);
  return (
    <div>
      <form
        onSubmit={handleSubmit(() => {
          redirect("/search");
        })}
      >
        <div
          className={`outline-none px-5 bg-light-grey w-116 rounded-56 flex hover:bg-light-grey-border ${
            isTyping
              ? "outline-2 outline-blue-primary outline-offset-[-2px] bg-light-grey-border"
              : "active:outline-2 active:outline-blue-primary active:outline-offset-[-2px] focus-within:outline-blue-primary focus-within:outline-offset-[-2px]"
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
