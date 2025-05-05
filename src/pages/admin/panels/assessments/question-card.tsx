import React, { useState } from "react";
import Card from "../../../../components/ui/card/card";
import { Question } from "../../../../components/types";
import Button from "../../../../components/ui/button/button";
import { FiEdit3 } from "react-icons/fi";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../../../../components/constants";
import AddQuestionForm from "../../../../components/forms/add-question";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [showQuestionForm, setShowQuestionForm] = useState(false);

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
      <p className="font-semibold">Options</p>
      <div className="flex flex-col gap-2 px-10 py-4">
        {question.options.map((op, id) => (
          <p
            key={id}
            className="border-2 border-secondary rounded-xl hover:bg-secondary transition duration-150 ease-in-out hover:text-sky-900 text-center p-2 w-full"
          >
            {op}
          </p>
        ))}
      </div>
      <div>
        <p>Correct Answer</p>
        <p className="font-semibold">{question.answer}</p>
      </div>
    </div>
  );
};
Card;
export default QuestionCard;
