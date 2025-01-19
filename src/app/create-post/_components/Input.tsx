"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function Input() {
  const { register } = useFormContext();
  return (
    <div className="w-full p-4 border border-light-grey-border rounded-24 relative peer">
      <input
        type="text"
        id="inputText"
        className="w-full outline-none text-dark-grey placeholder-transparent peer px-1 focus:ring-0 focus:border-none"
        placeholder="Title"
        {...register("postInput")}
      />
      <label
        htmlFor="inputText"
        className="transition-all text-[#817870] duration-200  absolute peer-focus:top-0 peer-focus:-translate-y-[2px] peer-focus:scale-75 peer-focus:text-dark-black left-4"
      >
        Title<span className="text-red-bright">*</span>
      </label>

      <style jsx>{`
        .peer:focus-within {
          border-color: #0766ad;
          border-width: 2px;
        }
      `}</style>
    </div>
  );
}
