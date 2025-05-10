// DropdownRow.tsx
import React, { useState, KeyboardEvent, MouseEvent, ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import clsx from "clsx";

export type DropdownRowProps = {
  children: ReactNode;
  dropdownContent?: ReactNode;
  colCount: number;
  defaultOpen?: boolean;
  className?: string;
  onToggle?: (
    isOpen: boolean,
    event: MouseEvent<HTMLTableRowElement> | KeyboardEvent<HTMLTableRowElement>
  ) => void;
};

const DropdownRow: React.FC<DropdownRowProps> = ({
  children,
  dropdownContent,
  colCount,
  defaultOpen = false,
  className = "",
  onToggle,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  const toggle = (
    event: MouseEvent<HTMLTableRowElement> | KeyboardEvent<HTMLTableRowElement>
  ) => {
    setOpen((prev) => {
      const next = !prev;
      onToggle?.(next, event);
      return next;
    });
  };

  const handleKey = (e: KeyboardEvent<HTMLTableRowElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(e);
    }
  };

  const cells = React.Children.map(children, (child, idx) => {
    // Only transform the first cell if it's a valid element with a className prop
    if (idx === 0 && React.isValidElement<{ className?: string }>(child)) {
      return React.cloneElement(child, {
        className: clsx(child.props.className, "relative pl-6"),
        //@ts-ignore
        children: (
          <>
            <FiChevronDown
              aria-hidden
              className={clsx(
                "absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 transform transition-transform duration-200",
                open && "rotate-180"
              )}
            />
            {
              //@ts-ignore
              child.props.children
            }
          </>
        ),
      });
    }
    // Leave all other cells untouched
    return child;
  });

  return (
    <>
      <tr
        tabIndex={0}
        role="button"
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={handleKey}
        className={clsx(
          "cursor-pointer transition-colors duration-100",
          className
        )}
      >
        {cells}
      </tr>

      {open && (
        <tr className="w-full">
          <td colSpan={colCount} className="w-full py-4">
            {dropdownContent}
          </td>
        </tr>
      )}
    </>
  );
};

export default DropdownRow;
