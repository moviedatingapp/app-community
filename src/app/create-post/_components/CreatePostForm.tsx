import { createPostNavItems } from "@/data";
import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";

export default function CreatePostForm() {
  return (
    <section className="w-full">
      <div className="w-1/2 flex justify-between">
        {createPostNavItems.map((navItem, index) => {
          return (
            <button
              type="button"
              key={index}
              className=" font-BH-Satoshi-medium p-2 hover:bg-light-grey border-b-4 border-b-blue-primary"
            >
              {navItem.itemName}
            </button>
          );
        })}
      </div>
      <Input />
      <TextArea />
    </section>
  );
}
