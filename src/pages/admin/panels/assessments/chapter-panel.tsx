import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../components/ui/button";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";
import { useAuthStore } from "../../../../components/stores/auth-store";
import { getChapterById } from "../../../../services/chapters";
import { Chapter, Quiz } from "../../../../components/types";
import Dropdown from "../../../../components/ui/dropdown";
import { getAllQuizzesByChapter } from "../../../../services/quizzes";
import QuestionCard from "./question-card";
import chapterImg from "../../../../assets/Exams-rafiki.png";

const ChapterPanel: React.FC = () => {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);
  const { assessmentId, chapterId } = useParams<{
    assessmentId: string;
    chapterId: string;
  }>();

  const [chapter, setChapter] = useState<Chapter | null>();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchChapter = async () => {
      if (token) {
        const response = await getChapterById(
          token,
          Number(assessmentId),
          Number(chapterId)
        );
        if (response.ok) {
          const data = await response.json();
          setChapter(data["chapter"]);
        }
      }
    };

    const fetchQuizzes = async () => {
      if (token) {
        const response = await getAllQuizzesByChapter(token, Number(chapterId));

        if (response.ok) {
          const data = await response.json();
          setQuizzes(data["quizzes"]);
        }
      }
    };

    fetchChapter();
    fetchQuizzes();

    return () => {};
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-5 items-start justify-start">
      <Button
        onClick={() => navigate("/admin/dashboard/assessments")}
        size="xs"
        className="flex gap-2 items-center justify-center mb-5"
      >
        <FaAngleLeft />
        <p className="mt-0.5">Back</p>
      </Button>
      <div>
        <h1>{chapter?.title}</h1>
        <div className="flex text-xs gap-2 items-start">
          <p>
            {new Date(chapter?.created_at as string).toLocaleDateString(
              "en-GB",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            )}
          </p>
        </div>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem maxime
        dignissimos sunt sit minus animi doloribus expedita, quo nulla
        assumenda, nesciunt numquam quis non quisquam in maiores corporis
        laborum dolore.
      </p>
      <div className="h-0.5 w-full bg-secondary" />
      <div className="relative w-full px-3 flex-col flex gap-2">
        <img
          className="fixed left-0 lg:top-1/2 lg:left-1/2 lg:-translate-y-30 lg:-translate-x-30 w-96 opacity-30 -z-10"
          src={chapterImg}
        />
        <h2>Quizzes</h2>
        <div className="flex flex-col gap-5 items-center justify-center w-full">
          {quizzes.map((quiz, idx) => (
            <Dropdown title={quiz.title} key={idx}>
              <div className="flex flex-col gap-3">
                {quiz.questions.map((ques, id) => (
                  <QuestionCard question={ques} key={id} />
                ))}
                <div className="lg:w-full flex items-center justify-center">
                <Button size="sm" className="flex gap-2 items-center w-fit"> <FaPlus/> Add Question</Button>
                </div>
              </div>
            </Dropdown>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterPanel;
