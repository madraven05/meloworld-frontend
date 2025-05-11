import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Experience from "../../scene/Experience";
import LikertScaleInput from "@/components/ui/input/likert-scale-input";
import Button from "@/components/ui/button/button";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useAuthStore } from "@/components/stores/auth-store";
import { getQuizByChapter } from "@/services/quizzes";
import { Question } from "@/components/types";

type UserAnswer = string | string[];

const AssessmentForm: React.FC = () => {
  const router = useRouter();
  const { chapterId, assessmentId } = router.query;
  const token = useAuthStore((s) => s.token);

  const [pageIndex, setPageIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  // Fetch questions
  useEffect(() => {
    const fetchAssessment = async () => {
      if (!token || !chapterId || !assessmentId) return;
      try {
        const res = await getQuizByChapter(
          token,
          Number(chapterId),
          Number(assessmentId)
        );
        if (res.ok) {
          const data = await res.json();
          setQuestions(data.quiz.questions);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchAssessment();
  }, [token, chapterId, assessmentId]);

  // Initialize userAnswers
  useEffect(() => {
    if (questions.length) {
      setUserAnswers(questions.map((q) => (q.type === "multiple" ? [] : "")));
    }
  }, [questions]);

  // Handle answer selection
  const handleAnswer = (answer: UserAnswer) => {
    setUserAnswers((prev) => {
      const next = [...prev];
      next[pageIndex] = answer;
      return next;
    });
  };

  const goPrev = () => setPageIndex((i) => Math.max(0, i - 1));
  const goNext = () =>
    setPageIndex((i) => Math.min(questions.length - 1, i + 1));

  const current = questions[pageIndex];
  const currentAnswer = userAnswers[pageIndex];

  return (
    <div className="relative flex h-screen w-screen overflow-hidden">
      {/* 3D background */}
      <Canvas className="absolute inset-0 z-0">
        <Experience />
      </Canvas>

      {/* form container */}
      <main
        className={`
          absolute
          bg-secondary/70 rounded-xl shadow-xl z-10 flex flex-col
          inset-0 p-4
          md:inset-auto md:top-1/2 md:left-1/2
          md:-translate-x-1/2 md:-translate-y-1/2
          md:w-[80vw] md:h-[80vh] md:p-10
        `}
      >
        {/* progress bar */}
        <div className="flex-none w-full flex flex-col items-center gap-2 mb-4 md:gap-3 md:mb-6">
          <div className="relative m-1 w-full h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-sky-900"
              initial={false}
              animate={{
                width: `${
                  questions.length
                    ? ((pageIndex + 1) / questions.length) * 100
                    : 0
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="font-semibold text-xs md:text-base">
            Question {pageIndex + 1} of {questions.length}
          </p>
        </div>

        {/* current question */}
        <div className="flex-1 overflow-y-auto w-full scrollbar-hide">
          {current ? (
            <ul className="list-none p-0 flex flex-col items-center">
              {/* Likert */}
              {current.type === "likert" && (
                <li className="w-full max-w-xl flex flex-col gap-4 md:gap-5">
                  <p className="font-semibold mb-5 text-base md:text-lg text-center px-2">
                    {current.question}
                  </p>
                  <LikertScaleInput
                    name={`q-${pageIndex}`}
                    value={currentAnswer as string}
                    onChange={(val: string) => handleAnswer(val)}
                  />
                </li>
              )}

              {/* Single-choice */}
              {current.type === "single" && (
                <li className="w-full max-w-xl flex flex-col gap-4 md:gap-5">
                  <p className="font-semibold mb-5 text-base md:text-lg text-center px-2">
                    {current.question}
                  </p>
                  <div className="flex flex-col gap-2 w-full">
                    {current.options.map((opt, idx) => (
                      <Button
                        key={idx}
                        variant={currentAnswer === opt ? "filled" : "outline"}
                        primaryColor="#024a70"
                        onClick={() => handleAnswer(opt)}
                      >
                        {opt}
                      </Button>
                    ))}
                  </div>
                </li>
              )}

              {/* Multiple-choice */}
              {current.type === "multiple" && (
                <li className="w-full max-w-xl flex flex-col gap-4 md:gap-5">
                  <p className="font-semibold mb-5 text-base md:text-lg text-center px-2">
                    {current.question}
                  </p>
                  <div className="flex flex-col gap-2 w-full">
                    {(Object.values(current.options) as string[]).map(
                      (opt, idx) => {
                        const selected = (currentAnswer as string[]).includes(
                          opt
                        );
                        return (
                          <Button
                            key={idx}
                            variant={selected ? "filled" : "outline"}
                            primaryColor="#024a70"
                            onClick={() => {
                              const prev = currentAnswer as string[];
                              const next = prev.includes(opt)
                                ? prev.filter((o) => o !== opt)
                                : [...prev, opt];
                              handleAnswer(next);
                            }}
                          >
                            {opt}
                          </Button>
                        );
                      }
                    )}
                  </div>
                </li>
              )}
            </ul>
          ) : (
            <p className="text-center mt-10 text-sm md:text-base text-gray-400">
              Loading questions...
            </p>
          )}
        </div>

        {/* navigation */}
        <div className="flex-none w-full flex items-center justify-between mt-4 md:mt-6 md:px-0 px-2">
          <button
            onClick={goPrev}
            disabled={pageIndex === 0}
            className="disabled:opacity-50 rounded-full hover:bg-sky-900/10 p-2 md:p-5"
          >
            <FiChevronLeft className="md:size-14 size-18" />
          </button>

          {pageIndex < questions.length - 1 ? (
            <button
              onClick={goNext}
              className="disabled:opacity-50 rounded-full hover:bg-sky-900/10 p-2 md:p-5"
            >
              <FiChevronRight className="md:size-14 size-18" />
            </button>
          ) : (
            <div className="flex items-center justify-end w-full">
              <Button
                variant="outline"
                onClick={() => console.log("Submit")}
                className="px-4 py-2 md:px-6 md:py-3"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AssessmentForm;
