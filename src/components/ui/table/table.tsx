import React, { ReactNode } from "react";

interface TableProps {
  headings: string[];
  children: ReactNode;
}

const Table: React.FC<TableProps> = ({ headings, children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="lg:table-fixed w-full border-y-2 border-gray-200">
        <thead>
          <tr>
            {headings.map((header, id) => (
              <th className="py-2 text-xs tracking-wider font-bold text-start px-6" key={id}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
