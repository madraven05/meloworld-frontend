import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React, { ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface DropdownProps {
  title: string;
  children?: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  return (
    <Disclosure as="div" className="w-full" defaultOpen={false}>
      <DisclosureButton className="card px-6 py-3 group backdrop-blur-md flex w-full items-center justify-between">
        <h3 className="text-sm/6 font-medium">{title}</h3>
        <FaChevronDown className="transform transition duration-200 ease-in-out group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel
        transition
        className="origin-top transition duration-500 ease-out data-[closed]:-translate-x-full data-[closed]:opacity-0 p-2 lg:px-32 py-5 text-sm/5"
      >
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Dropdown;
