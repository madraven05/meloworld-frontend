import React, { useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Experience from "../../scene/Experience";
import LikertScaleInput from "@/components/ui/input/likert-scale-input";
import Button from "@/components/ui/button/button";
import { Canvas } from "@react-three/fiber";

interface Question {
  id: string;
  text: string;
}

const questions: Question[] = Array.from({ length: 10 }, (_, i) => ({
  id: `q${i + 1}`,
  text: `This is question ${i + 1}. Please replace with the actual text.`,
}));

const PAGE_SIZE = 1;
const totalPages = Math.ceil(questions.length / PAGE_SIZE);

const extraversionData = {
  trait: "Meloworld",
  reportTitle: "ASSESSMENT REPORT",
  score: { value: 28, level: "High" },
  description:
    "Extraversion refers to the extent to which employees are outgoing and sociable in their interpersonal activities, preferring engagement with others.",
  interpretations: [
    {
      level: "High",
      description:
        "Employees with high levels of extraversion thrive on social interaction and derive energy from engaging with others. They are characterized by sociability, assertiveness and enthusiasm. They are often the life of the office, readily contributing ideas and enthusiasm during meetings and social gatherings. They are comfortable in a variety of social situations, making small talk effortlessly and quickly forming connections with others.",
    },
    {
      level: "Average",
      description:
        "Employees with average levels of extraversion may enjoy social interaction to some extent but may also value time alone for relaxation and reflection. While they can handle social situations and participate in team activities, they may not seek out social engagement very frequently. They may take some time to warm up to new people.",
    },
    {
      level: "Low",
      description:
        "Employees with low levels of extraversion may prefer solitude over social interaction. They may find large social gatherings or frequent interactions with colleagues draining and may prefer to keep to themselves. While they may be capable of handling social situations when necessary, they may feel more comfortable listening than actively participating in conversations. They may take time to warm up to new people.",
    },
  ],
};

const AssessmentForm: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const start = pageIndex * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, questions.length);
  const pageQuestions = questions.slice(start, end);
  
  const goPrev = () => pageIndex > 0 && setPageIndex((i) => i - 1);
  const goNext = () => pageIndex < totalPages - 1 && setPageIndex((i) => i + 1);

  return (
    <div className="relative flex h-screen w-screen overflow-x-hidden">
      {/* 3-D background */}
      <Canvas className="absolute inset-0 z-0">
        <Experience />
      </Canvas>

      {/* form container */}
      <main className="absolute p-10 bg-secondary rounded-xl shadow-xl top-1/2 left-1/2 z-10 flex flex-col h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2">
        {/* progress bar */}
        <div className="flex-none w-full flex flex-col items-center gap-3 mb-6">
          <div className="relative m-2 w-full h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-sky-900"
              initial={false}
              animate={{ width: `${((pageIndex + 1) / totalPages) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="font-semibold text-xs md:text-base">
            Questions {start + 1}-{end} of {questions.length}
          </p>
        </div>

        {/* questions list */}
        <div className="flex-1 overflow-y-auto w-full scrollbar-hide">
          <ul className="list-none p-0 space-y-14">
            {pageQuestions.map((q) => (
              <li key={q.id} className="flex flex-col gap-5 items-center">
                <p className="font-semibold text-lg text-center px-2">
                  {q.text}
                </p>
                <LikertScaleInput name={q.id} />
              </li>
            ))}
          </ul>
        </div>

        {/* navigation */}
        <div className="flex-none w-full p-14 flex items-center justify-between mt-6">
          <button
            onClick={goPrev}
            disabled={pageIndex === 0}
            className="disabled:opacity-50 rounded-full hover:bg-sky-900/10 p-5"
          >
            <FiChevronLeft size={28} />
          </button>

          {pageIndex < totalPages - 1 ? (
            <button onClick={goNext} className="disabled:opacity-50 hover:bg-sky-900/10 p-5 rounded-full">
              <FiChevronRight size={28} />
            </button>
          ) : (
            <div className="flex flex-col items-end space-y-4 w-full">
              {/* PDF Viewer & Download */}

              <Button variant="outline">
                {/* <PDFDownloadLink
                  document={<Report {...extraversionData} />}
                  fileName={`${extraversionData.trait.toLowerCase()}-assessment.pdf`}
                >
                  {({ loading }) =>
                    loading ? "Preparing document..." : "Submit"
                  }
                </PDFDownloadLink> */}
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AssessmentForm;
