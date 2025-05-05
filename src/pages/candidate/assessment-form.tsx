import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./scene/Experience";
import LikertScaleInput from "../../components/ui/input/likert-scale-input";
import Button from "../../components/ui/button/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

interface Question {
  id: string;
  text: string;
}

// Generate 50 placeholder questions programmatically
const questions: Question[] = Array.from({ length: 50 }, (_, i) => ({
  id: `q${i + 1}`,
  text: `This is question ${i + 1}. Please replace with the actual text for question ${i + 1}.`, 
}));

const PAGE_SIZE = 1;
const totalQuestions = questions.length;
const totalPages = Math.ceil(totalQuestions / PAGE_SIZE);

const AssessmentForm: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const start = pageIndex * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, totalQuestions);
  const pageQuestions = questions.slice(start, end);

  const goPrev = () => pageIndex > 0 && setPageIndex(i => i - 1);
  const goNext = () => pageIndex < totalPages - 1 && setPageIndex(i => i + 1);

  return (
    <div className="candidate relative flex h-screen w-screen overflow-x-hidden">
      {/* 3-D background */}
      <Canvas className="absolute opacity-50 inset-0 p-5 h-full w-full z-0 rounded-xl shadow-xl">
        <ambientLight intensity={2.7} />
        <directionalLight intensity={60} position={[2, 2, 2]} />
        <Experience />
        <OrbitControls />
      </Canvas>

      {/* form container */}
      <main className="absolute inset-0 z-10 flex flex-col h-full w-full p-14 md:pt-24 md:pb-10 md:px-32">
        {/* fixed header */}
        <div className="flex-none w-full flex flex-col items-center gap-3 mb-6">
          <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-sky-900"
              initial={false}
              animate={{ width: `${((pageIndex + 1) / totalPages) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="font-semibold text-xs md:text-base">
            Questions {start + 1}-{end} of {totalQuestions}
          </p>
        </div>

        {/* scrollable question list */}
        <div className="flex-1 overflow-y-auto overflow-hidden w-full scrollbar-hide">
          <ul className="list-none p-0 space-y-14">
            {pageQuestions.map(q => (
              <li key={q.id} className="flex flex-col gap-5 items-center">
                <p className="font-semibold text-lg text-center px-2">
                  {q.text}
                </p>
                <LikertScaleInput name={q.id} />
              </li>
            ))}
          </ul>
        </div>

        {/* navigation/footer */}
        <div className="flex-none w-full p-5 flex items-center justify-between mt-6">
          <button
            onClick={goPrev}
            disabled={pageIndex === 0}
            className="disabled:opacity-50"
          >
            <FiChevronLeft size={28} />
          </button>

          {pageIndex < totalPages - 1 ? (
            <button onClick={goNext} className="disabled:opacity-50">
              <FiChevronRight size={28} />
            </button>
          ) : (
            <Button variant="outline">
              Submit
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default AssessmentForm;