import React, { useState } from "react";
import Card from "../../../ui/card/card";
import { Question } from "../../../types";
import Button from "../../../ui/button/button";
import { FiEdit3 } from "react-icons/fi";
import LikertScaleInput from "../../../ui/input/likert-scale-input";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  console.debug(showQuestionForm)
  return (
    <div className="relative bg-gradient-to-r from-sky-900 to-sky-900/70 rounded-xl shadow-lg text-secondary p-5 backdrop-blur-lg flex flex-col gap-2">
      <div className="flex justify-end mb-5">
        <Button onClick={() => setShowQuestionForm(true)} size="xs">
          <FiEdit3 />
        </Button>
      </div>
      <p className="font-semibold border-2 rounded-xl p-2 tracking-wider">
        Q. {question.question}
      </p>
      <div className="flex flex-col gap-2 px-10 py-4">
        {/* Single correct type questions */}
        {question.type == "single" && (
          <div className="flex flex-col w-full gap-3">
            <p className="font-semibold">Options</p>
            {question.options.map((op, id) => (
              <p
                key={id}
                className="border-2 border-secondary rounded-xl hover:bg-secondary transition duration-150 ease-in-out hover:text-sky-900 text-center p-2 w-full"
              >
                {op}
              </p>
            ))}
            <div>
              <p>Correct Answer</p>
              <p className="font-semibold">{question.answer}</p>
            </div>
          </div>
        )}
        {/* Likert Type questions */}
        {question.type == "likert" && (
          <div className="w-full">
            <LikertScaleInput name="asdf" />
          </div>
        )}
      </div>
    </div>
  );
};
Card;
export default QuestionCard;
