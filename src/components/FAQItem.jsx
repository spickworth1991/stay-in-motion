import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-medium text-gray-800">{question}</span>
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <div
        className={`mt-2 text-gray-700 overflow-hidden transition-max-h duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
