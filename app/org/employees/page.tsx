"use client";
import { Employee } from "@/components/panels/org/candidates-table";
import Button from "@/components/ui/button/button";
import Card from "@/components/ui/card/card";
import Input from "@/components/ui/input/input";
import Table from "@/components/ui/table/table";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaMagnifyingGlass, FaUpload } from "react-icons/fa6";

const OrgCandidatesPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10; // change this to display more or fewer items per page

  const headings = ["Name", "Age", "Gender", "Position/Role"];
  const uploadRef = useRef<HTMLInputElement>(null);

  const handleEmployeesSheetUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === "string") {
        const lines = text.split("\n").filter((line) => line.trim() !== "");
        // Assuming the first line is a header
        const [, ...dataLines] = lines;
        const parsedEmployees: Employee[] = dataLines.map((line, index) => {
          const [id, name, age, gender, position] = line.split(",");
          return {
            id: index + 1,
            name: name.trim(),
            age: Number(age),
            gender: gender.trim(),
            position: position ? position.trim() : "",
          };
        });
        setEmployees(parsedEmployees);
        setCurrentPage(1); // Reset to first page on new upload
      }
    };

    reader.readAsText(file);
  };

  // Calculate pagination indices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = employees.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  return (
    <div className="dashboard-panel">
      <Card className="w-full bg-white/70 h-full p-5 flex flex-col gap-5">
        {/* Header section */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Employee Directory</h1>
          <p className="text-sm">
            Manage and review employee details. Upload a CSV file to import candidate information.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full justify-between">
          <Input
            inputSize={"sm"}
            placeholder="Search"
            icon={<FaMagnifyingGlass />}
          />
          <Button onClick={() => uploadRef.current?.click()} size="xs" variant="outline">
            <FaUpload /> Upload
          </Button>

          <input
            onChange={handleEmployeesSheetUpload}
            ref={uploadRef}
            accept="csv"
            type="file"
            className="hidden"
          />
        </div>

        {currentEmployees.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-sm mb-4">No employee data found. Please upload a CSV file to get started.</p>
          </div>
        ) : (
          <Table headings={headings}>
            {currentEmployees.map((row) => (
              <tr key={row.id}>
          <td className="px-6 py-4 text-center">{row.name}</td>
          <td className="px-6 py-4 text-center">{row.age}</td>
          <td className="px-6 py-4 text-center">{row.gender}</td>
          <td className="px-6 py-4 text-center">{row.position}</td>
              </tr>
            ))}
          </Table>
        )}

        {/* Pagination controls */}
        <div className="flex justify-center gap-3">
          <div
            onClick={() => {
              if (currentPage > 1) setCurrentPage((prev) => Math.max(prev - 1, 1));
            }}
            className={`cursor-pointer p-2 rounded-full ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-sky-900/20"
            }`}
          >
            <FaChevronLeft />
          </div>
          <span className="self-center">
            Page {currentPage} of {totalPages}
          </span>
          <div
            onClick={() => {
              if (currentPage < totalPages) setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            }}
            className={`cursor-pointer p-2 rounded-full ${
              currentPage === totalPages || totalPages === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-sky-900/20"
            }`}
          >
            <FaChevronRight />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrgCandidatesPage;
