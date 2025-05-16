"use client";

import * as React from "react";
import * as Select from "@radix-ui/react-select";
import { IoClose } from "react-icons/io5";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { GoCheck } from "react-icons/go";

interface MultiSelectProps {
  items: { value: string; label: string }[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  selected,
  onChange,
  placeholder = "Select options",
}) => {
  const handleSelect = (value: string) => {
    if (!selected.includes(value)) {
      onChange([...selected, value]);
    }
  };

  const removeTag = (value: string) => {
    onChange(selected.filter((v) => v !== value));
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-2">
        {selected.map((value) => {
          const label = items.find((item) => item.value === value)?.label || value;
          return (
            <span
              key={value}
              className="flex items-center gap-1 text-sm bg-secondary px-2 py-1 rounded-full"
            >
              {label}
              <button onClick={() => removeTag(value)} className="hover:text-red-600">
                <IoClose className="w-3 h-3" />
              </button>
            </span>
          );
        })}
      </div>

      <Select.Root onValueChange={handleSelect}>
        <Select.Trigger className="inline-flex items-center justify-between w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary">
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <FaChevronDown className="w-4 h-4" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="z-50 bg-white rounded-md shadow-lg border border-gray-200" position="popper">
            <Select.ScrollUpButton className="flex justify-center items-center p-1">
              <FaChevronUp className="w-4 h-4" />
            </Select.ScrollUpButton>

            <Select.Viewport className="p-1">
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  value={item.value}
                  disabled={selected.includes(item.value)}
                  className="text-sm w-full px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between rounded disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Select.ItemText>{item.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>

            <Select.ScrollDownButton className="flex justify-center items-center p-1">
              <FaChevronDown className="w-4 h-4" />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default MultiSelect;
