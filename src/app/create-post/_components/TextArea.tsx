"use client";
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
    <div className="w-full">
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => applyFormat("bold")}
        >
          Bold
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => applyFormat("italic")}
        >
          Italic
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => applyFormat("underline")}
        >
          Underline
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => applyFormat("insertOrderedList")}
        >
          Ordered List
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => applyFormat("insertUnorderedList")}
        >
          Unordered List
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => {
            const url = prompt("Enter URL:") || "";
            if (url) applyFormat("createLink", url);
          }}
        >
          Link
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        className="w-full outline-none h-44 text-dark-grey border-light-grey-border rounded-24 border p-4 bg-white"
        suppressContentEditableWarning={true}
      ></div>
    </div>
  );
};

export default TextArea;
