import React, { useEffect, useState } from "react";
import Card from "../../../../components/ui/card/card";
import Input from "../../../../components/ui/input/input";
import { FaSearch } from "react-icons/fa";
import Table from "../../../../components/ui/table/table";
import { useAuthStore } from "../../../../components/stores/auth-store";
import { Assessment } from "../../../../components/types";
import AssessmentDropdownRow from "./assessment-dropdown-row";
import { getAllAssessments } from "../../../../services/assessments";
import { IoFilter } from "react-icons/io5";
import Button from "../../../../components/ui/button/button";
import { FaFilter, FaSort } from "react-icons/fa6";

const AssessmentsHome: React.FC = () => {
  const token = useAuthStore((state) => state.token);
  const [assessments, setAssessments] = useState<Assessment[]>([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      if (token) {
        const response = await getAllAssessments(token);
        if (response.ok) {
          const data = await response.json();
          setAssessments(data["courses"]);
        }
      }
    };

    fetchAssessments();

    return () => {};
  }, []);
  return (
    <>
      <h1>Assessments</h1>

      <Card className="flex flex-col gap-10 w-full h-full p-10">
        <div className="flex w-full justify-between items-center">
          <Input
            size="sm"
            textSize="xs"
            placeholder="Search Assessments"
            icon={<FaSearch />}
          />
          <div className="flex gap-2">
            <Button size="xs" className="flex gap-2">
              <FaSort />
              <p className="hidden lg:block">Sort</p>
            </Button>
            <Button size="xs" className="flex gap-2">
              <FaFilter />
              <p className="hidden lg:block">Filter</p>
            </Button>
          </div>
        </div>
        <Table headings={["Title", "Description", "Created At", "Updated At"]}>
          {assessments.map((a) => (
            <AssessmentDropdownRow
              key={a.id}
              assessmentId={a.id}
              title={a.title}
              description={a.description}
              createdAt={a.created_at}
              updatedAt={a.updated_at}
            />
          ))}
        </Table>
      </Card>
    </>
  );
};

export default AssessmentsHome;
