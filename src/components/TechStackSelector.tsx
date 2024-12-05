import React from "react";

export default function TechStackSelector({ onSelect }: { onSelect: (stack: string) => void }) {
  const stacks = ["MERN", "T3", "Go", "Python"];

  return (
    <div className="flex gap-4 mb-4">
      {stacks.map((stack) => (
        <button
          key={stack}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => onSelect(stack)}
        >
          {stack}
        </button>
      ))}
    </div>
  );
}
