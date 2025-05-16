// components/Select.tsx
"use client";

import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps {
  items: SelectItem[];
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ items, placeholder, value, onValueChange }) => {
  return (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
      <RadixSelect.Trigger className="inline-flex items-center justify-between rounded-md px-3 py-2 text-sm border border-gray-300 bg-white text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <RadixSelect.Value placeholder={placeholder || "Select an option"} />
        <RadixSelect.Icon>
          <FaChevronDown className="w-4 h-4" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className="z-50 bg-white rounded-md shadow-lg border border-gray-200"
          position="popper"
        >
          <RadixSelect.ScrollUpButton className="flex justify-center items-center p-1">
            <FaChevronUp className="w-4 h-4" />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="p-1">
            {items.map((item) => (
              <RadixSelect.Item
                key={item.value}
                value={item.value}
                className="text-sm text-black px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between rounded"
              >
                <RadixSelect.ItemText>{item.label}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator>
                  <FaCheck className="w-4 h-4 ml-2 text-blue-600" />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className="flex justify-center items-center p-1">
            <FaChevronDown className="w-4 h-4" />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export default Select;
