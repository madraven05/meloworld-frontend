import React, { useEffect, useState } from "react";
import Card from "../../../../components/ui/card";
import { useAuthStore } from "../../../../components/stores/auth-store";
import { getAllAssessments } from "../../../../components/services/assessments";
import { Assessment } from "../../../../components/types";
import Table from "../../../../components/ui/table/table";
import Button from "../../../../components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const AssessmentTable: React.FC = () => {
  const token = useAuthStore((state) => state.token);

  const [loading, setLoading] = useState(true);
  const [assessments, setAssessments] = useState<Assessment[]>([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      if (token) {
        const response = await getAllAssessments(token);
        if (response.ok) {
          const data = await response.json();
          setTimeout(() => {
            setAssessments(data["courses"]);
          }, 2000);
        }
      }
    };

    fetchAssessments();

    return () => {};
  }, []);

  useEffect(() => {
    if (assessments.length > 0) {
      setLoading(false);
    }
  }, [assessments]);

  const headings = ["Title", "Description", "Created At", "Updated At"];

  return (
    <Card className="flex flex-col items-start gap-5 p-5 justify-start w-full h-96">
      <div className="flex w-full justify-between items-center">
        <h2>Assessments</h2>
        <Button size="xs" className="flex gap-2 items-center">
            View More
            <FaArrowRight/>
        </Button>
      </div>
      <Table headings={["Title", "Description", "Created At", "Updated At"]}>
        {loading
          ? // Show 5 rows with dynamic columns from headings
            Array.from({ length: 4 }).map((_, rowIdx) => (
              <tr key={rowIdx}>
                {headings.map((_, colIdx) => (
                  <td
                    key={colIdx}
                    className="px-6 py-4 border-y-2 border-gray-200 text-center"
                  >
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mx-auto" />
                  </td>
                ))}
              </tr>
            ))
          : assessments.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {Object.entries(row).map(([key, value], colIdx) => {
                  if (key === "id") return null;

                  const isDate =
                    typeof value === "string" && !isNaN(Date.parse(value));

                  return (
                    <td
                      key={colIdx}
                      className="px-6 py-4 text-sm border-y-2 border-gray-200 text-center"
                    >
                      {isDate
                        ? new Date(value).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : String(value)}
                    </td>
                  );
                })}
              </tr>
            ))}
      </Table>
    </Card>
  );
};

export default AssessmentTable;
