import React, { useState } from "react";
import DropdownRow from "../../../../components/ui/table/dropdown-row";
import { useAuthStore } from "../../../../components/stores/auth-store";
import { Chapter } from "../../../../components/types";
import Button from "../../../../components/ui/button/button";
import chapterImg from "../../../../assets/admin-login.png";
import Card from "../../../../components/ui/card/card";
import { useNavigate } from "react-router-dom";
import { getAllChapters } from "../../../../services/chapters";

interface AssessmentDropdownRowProps {
  assessmentId: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const AssessmentDropdownRow: React.FC<AssessmentDropdownRowProps> = ({
  assessmentId,
  title,
  description,
  createdAt,
  updatedAt,
}) => {
  const navigate = useNavigate();
  const { token } = useAuthStore();
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const toggleOpen = async (open: boolean) => {
    if (open && token) {
      const response = await getAllChapters(token, assessmentId);
      if (response.ok) {
        const data = await response.json();
        setChapters(data["chapters"]);
      }
    }
  };

  return (
    <DropdownRow
      onToggle={(open) => toggleOpen(open)}
      dropdownContent={
        <>
          {chapters.length > 0 ? (
            <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full justify-center">
              {chapters
                .sort((a, b) => b.chapter_order - a.chapter_order)
                .map((c, id) => (
                  <Card
                    
                    key={id}
                    className={`flex relative flex-col h-40 gap-2 shadow-md items-center rounded-xl border-gray-2 py-2 px-6 w-40 lg:w-full justify-center`}
                  >
                    <img
                      src={chapterImg}
                      className="absolute w-40 opacity-20"
                    />
                    <h3 className="w-full text-center font-semibold">{c.title}</h3>
                    <Button onClick={() => navigate(`chapter/${assessmentId}/${c.id}`)} size="xs">View More</Button>
                  </Card>
                ))}
                <Card
                    className={`flex relative flex-col h-40 gap-2 shadow-md items-center rounded-xl border-gray-2 py-2 px-6 w-40 lg:w-full justify-center`}
                  >
                    <h3 className="font-semibold">Add new chapter</h3>
                    <Button variant="outline" size="xs">Add chapter</Button>
                  </Card>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 items-center justify-center w-full text-center">
                <p>No chapters added yet</p>
                <Button variant="outline" size="xs">Add Chapters</Button>
              </div>
            </>
          )}
        </>
      }
      colCount={4}
    >
      <td className="font-semibold">{title}</td>
      <td>{description}</td>
      <td>
        {new Date(createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </td>
      <td>
        {new Date(updatedAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </td>
    </DropdownRow>
  );
};

export default AssessmentDropdownRow;
