import React from "react";
import Card from "../../../../components/ui/card";
import { Question } from "../../../../components/types";
import Button from "../../../../components/ui/button";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <Card className="p-5 bg-secondary/70 backdrop-blur-sm flex flex-col gap-2">
      <p className="font-semibold border-2 rounded-xl p-2 tracking-wider">Q. {question.question}</p>
      <p className="font-semibold">Options</p>
      <div className="flex flex-col gap-2 px-10 py-4">
        {question.options.map((op, id) => (
          <Button size="xs" className="w-full">
            {op}
          </Button>
        ))}
      </div>
      <div>
        <p>Correct Answer</p>
        <p className="font-semibold">{question.answer}</p>
      </div>
    </Card>
  );
};

export default QuestionCard;
