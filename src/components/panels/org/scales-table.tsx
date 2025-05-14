"use client";
import Button from "@/components/ui/button/button";
import Card from "@/components/ui/card/card";
import { Progress } from "@/components/ui/progress/progress";
import Table from "@/components/ui/table/table";
import React, { useState } from "react";

const ScalesTable = () => {
  const [scales] = useState<Record<string, any>[]>([
    {
      id: 1,
      scale: "ABC Scale",
      progress: 70,
    },
    {
      id: 2,
      scale: "XYZ Scale",
      progress: 90,
    },
    {
      id: 3,
      scale: "Health Scale",
      progress: 40,
    },
  ]);

  const headings = ["Scale", "Progress"];

  return (
    <Card className="flex bg-white flex-col items-start gap-5 p-5 justify-start w-full h-full">
      <div className="flex w-full justify-between items-center">
        <h2>Scales</h2>
        <Button variant="outline" size="xs" className="flex gap-2 items-center">
          View More
        </Button>
      </div>
      <Table headings={headings}>
        {scales.map((row, rowIdx) => (
          <tr key={row.id || rowIdx}>
            <td>{row.scale}</td>
            <td>
              <div className="w-40 flex gap-2 justify-center items-center">
                <Progress value={row.progress} />
                <p className="font-semibold text-xs">{row.progress}%</p>
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </Card>
  );
};

export default ScalesTable;
