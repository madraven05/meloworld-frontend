"use client";
import Button from "@/components/ui/button/button";
import Card from "@/components/ui/card/card";
import Table from "@/components/ui/table/table";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export interface Employee {
    id: number,
    name: string,
    age: number,
    gender: string,
    position: string
}

const CandidatesTable = () => {
  const router = useRouter();
  const candidates = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 29,
      gender: "Female",
      position: "Software Engineer",
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 35,
      gender: "Male",
      position: "Product Manager",
    },
    {
      id: 3,
      name: "Carol Perez",
      age: 42,
      gender: "Female",
      position: "UX Designer",
    },
  ];

  const headings = ["Name", "Age", "Gender", "Position"];

  return (
    <Card className="flex bg-white flex-col items-start gap-5 p-5 justify-start w-full h-full">
      <div className="flex w-full justify-between items-center">
        <h2>Candidates</h2>
        <Button
          onClick={() => router.push("/org/employees")}
          variant="outline"
          size="xs"
          className="flex gap-2 items-center"
        >
          View More
          <FaArrowRight />
        </Button>
      </div>

      <Table headings={headings}>
        {candidates.map((row) => (
          <tr key={row.id}>
            <td className="px-6 py-4 text-center">{row.name}</td>
            <td className="px-6 py-4 text-center">{row.age}</td>
            <td className="px-6 py-4 text-center">{row.gender}</td>
            <td className="px-6 py- text-center">{row.position}</td>
          </tr>
        ))}
      </Table>
    </Card>
  );
};

export default CandidatesTable;
