"use client";
import { editableIcons } from "@/data";
import Image from "next/image";
import React, { useRef } from "react";

const TextArea: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const applyFormat = (command: string, value?: string) => {
    if (editorRef.current && document.queryCommandSupported(command)) {
      document.execCommand(command, false, value);
      editorRef.current.focus();
    } else {
      console.warn(`Command "${command}" is not supported.`);
    }
  };

  return (
    <div className="w-full  border-light-grey-border rounded-24 border">
      <div className="flex gap-14 p-3">
        {editableIcons.map((editableIcon, index) => {
          return (
            <button
              key={index}
              type="button"
              className=" p-2 bg-gray-200 hover:bg-gray-300 rounded-full hover:bg-light-grey"
              onClick={() => applyFormat(editableIcon.iconApplyFormat)}
            >
              <Image
                src={editableIcon.iconSrc}
                alt={editableIcon.iconAlt}
                width={15}
                height={15}
              />
            </button>
          );
        })}
      </div>
      <div
        ref={editorRef}
        contentEditable
        className="w-full outline-none h-44 text-dark-grey px-6 bg-white"
        suppressContentEditableWarning={true}
      ></div>
    </div>
  );
};

export default TextArea;
