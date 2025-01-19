"use client";
import { editableIcons } from "@/data";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const TextArea: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeFormats, setActiveFormats] = useState<string[]>([]);

  // Function to apply formatting
  const applyFormat = (command: string, value?: string) => {
    if (editorRef.current && document.queryCommandSupported(command)) {
      document.execCommand(command, false, value);
      editorRef.current.focus();
      updateActiveFormats(); // Update active formats after applying the style
    } else {
      console.warn(`Command "${command}" is not supported.`);
    }
  };

  // Function to check and update active formats
  const updateActiveFormats = () => {
    const newActiveFormats: string[] = [];
    editableIcons.forEach((icon) => {
      if (document.queryCommandState(icon.iconApplyFormat)) {
        newActiveFormats.push(icon.iconApplyFormat);
      }
    });
    setActiveFormats(newActiveFormats);
  };

  // Check active formats on mount and whenever the content in the editor changes
  useEffect(() => {
    updateActiveFormats();
  }, []);

  return (
    <div className="w-full border-light-grey-border rounded-24 border">
      <div className="flex gap-14 p-3">
        {editableIcons.map((editableIcon, index) => {
          const isActive = activeFormats.includes(editableIcon.iconApplyFormat);
          return (
            <button
              key={index}
              type="button"
              className={`p-2 rounded-full hover:bg-light-grey ${
                isActive ? "bg-light-grey" : "bg-gray-200 hover:bg-gray-300"
              }`}
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
