import React from "react";

interface LikertScaleInputProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
}

const SCALE_OPTIONS = [
  { label: "Strongly Disagree", value: "1", color: "#ff7900" },
  { label: "Disagree", value: "2", color: "#ff7900" },
  { label: "Neutral", value: "3", color: "#9ca3af" }, // Tailwind gray-400
  { label: "Agree", value: "4", color: "#024a70" },
  { label: "Strongly Agree", value: "5", color: "#024a70" },
];

const LikertScaleInput: React.FC<LikertScaleInputProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      {SCALE_OPTIONS.map((option) => (
        <label
          key={option.value}
          className="flex flex-col items-center text-center text-xs font-medium"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            className="sr-only"
          />
          <div
            className={`
              w-5 h-5 rounded-full border-2
              transition-all cursor-pointer
              ${value === option.value
                ? "scale-110"
                : "opacity-60 hover:opacity-100"}
            `}
            style={{
              borderColor: option.color,
              backgroundColor: value === option.value ? option.color : "transparent",
            }}
            onClick={() => onChange?.(option.value)}
          />
          <span className="mt-1">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default LikertScaleInput;
