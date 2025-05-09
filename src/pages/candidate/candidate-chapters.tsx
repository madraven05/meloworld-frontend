import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/personality.png";
import Card from "../../components/ui/card/card";
import Button from "../../components/ui/button/button";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../../components/stores/auth-store";
import { getAllQuizzesByChapter } from "../../services/quizzes";
import {  Quiz } from "../../components/types";

const CandidateChapters: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();
  const { courseId } = useParams<{
    courseId: string;
  }>();
  const [quizzesData, setQuizzesData] = useState<Quiz[]>([]);
  useEffect(() => {
    const fetchChapters = async () => {
      if (token) {
        try {
          const response = await getAllQuizzesByChapter(
            token,
            Number(courseId)
          );
          if (response?.ok) {
            const data = await response.json();
            const quizzes: Quiz[] = data.quizzes ?? [];
            console.log("fetched courses:", quizzes);
            setQuizzesData(quizzes);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchChapters();
  }, []);
  return (
    <motion.div
      className="relative min-h-screen w-full p-4 md:p-8 lg:p-20 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-4xl lg:text-7xl">Personality Assessments</p>
          <p className="text-sm sm:text-base md:text-lg">
            These reveal personality traits, motivations, and behavioral
            tendencies.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            className="w-4/5 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            src={heroImg}
            alt="Personality Assessment"
          />
        </div>
      </motion.div>

      {/* CandidateChapters List */}
      <div className="flex flex-col gap-4 text-sky-900">
        {quizzesData.map((scale, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-gradient-to-r from-secondary/10 to-secondary border border-sky-900 w-full h-48 md:h-52 lg:h-full py-4 px-4 md:px-6 text-center lg:text-start">
              <div
                className="
                  flex flex-col lg:flex-row 
                  justify-center lg:justify-between 
                  items-center lg:items-start 
                  h-full w-full
                "
              >
                {/* Text Block */}
                <div className="flex-1 flex flex-col items-center justify-center lg:items-start lg:justify-start h-full gap-1">
                  <p className="font-semibold text-sm md:text-lg">
                    {scale.title}
                  </p>
                  <p className="text-xs text-sky-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                {/* Button Block */}
                <div className="mt-4 lg:mt-0 flex items-center justify-center lg:justify-end">
                  {false ? (
                    <Button size="xs" disabled>
                      Locked
                    </Button>
                  ) : (
                    <Button
                      onClick={() => navigate(`/candidate/assessment/${id}`)}
                      size="xs"
                      variant="outline"
                    >
                      Take
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CandidateChapters;
