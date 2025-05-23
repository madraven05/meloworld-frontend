"use client";

import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useAuthStore } from "@/components/stores/auth-store";
import { Chapter, Quiz } from "@/components/types";
import { getChapterById } from "@/services/chapters";
import { getAllQuizzesByChapter } from "@/services/quizzes";
import Button from "@/components/ui/button/button";
import Dropdown from "@/components/ui/dropdown/dropdown";
import QuestionCard from "@/components/panels/admin/assessments/question-card";
import AddQuestionForm from "@/components/forms/add-question";
import { useParams, useRouter } from "next/navigation";

const ChapterPanel: React.FC = () => {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const { assessmentId, chapterId } = useParams();
  const [chapter, setChapter] = useState<Chapter | null>();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [showQuestionForm, setShowQuestionForm] = useState<{
    active: boolean;
    quiz?: Quiz;
  }>({
    active: false,
  });

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
    <div className="dashboard-panel relative h-full w-full flex flex-col gap-5 items-start justify-start">
      <Button
        onClick={() => router.push("/admin/assessments")}
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
        {chapter?.description}
      </p>
      <div className="h-0.5 w-full bg-secondary" />
      <div className="relative w-full flex-col flex gap-2">
        <h2>Quizzes</h2>
        <div className="flex flex-col gap-5 items-center justify-center w-full">
          {/* {quizzes.map((quiz, idx) => (
            <Dropdown title={quiz.title} key={idx}>
              <div className="flex flex-col gap-3">
                {quiz.questions.map((ques, id) => (
                  <QuestionCard quiz={quiz} question={ques} key={id} />
                ))}
                <div className="lg:w-full flex items-center justify-center">
                  <Button
                    onClick={() =>
                      setShowQuestionForm({ active: true, quiz: quiz })
                    }
                    size="xs"
                    className="flex gap-2 items-center w-fit"
                  >
                    <FaPlus /> Add Question
                  </Button>
                </div>
              </div>
            </Dropdown>
          ))} */}
        </div>
      </div>
      <AnimatePresence>
        {showQuestionForm.active && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            exit={{ x: "100%", opacity: 0 }}
            className="fixed p-10 right-0 top-0 h-full w-full lg:w-1/2 bg-secondary shadow-xl"
          >
            <div className="absolute top-0 left-0 text-sky-900 py-5 px-12 w-full">
              <h1>Add Question</h1>
            </div>
            <div className="w-full h-full mt-14">
              <AddQuestionForm
                chapterId={Number(chapterId)}
                quiz={showQuestionForm.quiz}
                onClose={() => setShowQuestionForm({ active: false })}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChapterPanel;
