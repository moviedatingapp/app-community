import React from "react";

export default function Input() {
  return (
    <div className=" w-full px-4 py-4 border border-light-grey-border rounded-24">
      <input
        placeholder="Title"
        type="text"
        className="w-full outline-none text-dark-grey placeholder:text-light-grey-placeholder"
      />
    </div>
  );
}
