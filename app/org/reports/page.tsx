"use client";

import Button from "@/components/ui/button/button";
import Card from "@/components/ui/card/card";
import { Progress } from "@/components/ui/progress/progress";
import Table from "@/components/ui/table/table";
import React from "react";
import { FaDownload } from "react-icons/fa6";

const OrgReportsPage = () => {
  return (
    <div className="dashboard-panel h-screen">
      <Card className="p-5 bg-white/60 h-screen">
        <h1 className="text-2xl font-bold mb-4">Organization Reports</h1>
        <p className="text-sm mb-6">
          View the progress and download reports for various organizational
          assessments.
        </p>
        <Table headings={["Scale", "Progress", "Report"]}>
          {[
            { id: 1, scale: "Self Assessment", progress: 100 },
            { id: 2, scale: "Personality", progress: 80 },
            { id: 3, scale: "Emotions", progress: 50 },
          ].map((row) => (
            <tr key={row.id}>
              <td>{row.scale}</td>
              <td>
                <div className="w-40 flex gap-2 justify-center items-center">
                  <Progress value={row.progress} />
                  <p className="font-semibold text-xs">{row.progress}%</p>
                </div>
              </td>
              <td>
                <Button
                  size="xs"
                  variant="outline"
                  disabled={row.progress !== 100}
                  onClick={() =>
                    row.progress === 100 &&
                    console.log(`Downloading report for ${row.scale}`)
                  }
                >
                  <FaDownload />
                  <p className="text-xs">Download Report</p>
                </Button>
              </td>
            </tr>
          ))}
        </Table>
      </Card>
    </div>
  );
};

export default OrgReportsPage;
