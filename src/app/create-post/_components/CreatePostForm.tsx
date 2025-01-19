"use client";
import { createPostNavItems } from "@/data";
import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { useFormContext } from "react-hook-form";
import { CreatePostNavItemType } from "@/data/types";

export default function CreatePostForm() {
  const { register } = useFormContext();

  return (
    <section className="w-full flex flex-col gap-16">
      <div className="w-1/2 flex justify-between">
        {createPostNavItems.map((navItem: CreatePostNavItemType, index) => {
          return (
            <div
              key={index}
              className="relative hover:bg-light-grey py-2 px-4 cursor-pointer"
              onClick={() => document.getElementById(navItem.itemType)?.click()}
            >
              <input
                type="radio"
                value={navItem.itemValue}
                id={navItem.itemType}
                {...register("navItems")}
                className="hidden peer"
              />
              <label
                htmlFor={navItem.itemType}
                className="font-BH-Satoshi-medium py-1 cursor-pointer peer-checked:border-b-4 peer-checked:border-blue-primary"
              >
                {navItem.itemName}
              </label>
            </div>
          );
        })}
      </div>
      <Input />
      <TextArea />
    </section>
  );
}
