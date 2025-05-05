import React from "react";
import homeImg from "../../assets/candidate-home-illustration.png";
import Card from "../../components/ui/card/card";
import suitcase from "../../assets/suitcase.png";
import emotional from "../../assets/emotional.png";
import Button from "../../components/ui/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const assessmentsData = [
  {
    title: "Personality",
    imgSrc: emotional,
    description: "Personality traits, motivations, and behavioral tendencies",
    progress: "2/10",
  },
  {
    title: "Career",
    imgSrc: suitcase,
    description: "Suitability for job roles or help identify career paths",
    progress: "2/10",
  },
  {
    title: "Emotional and Social Intelligence",
    imgSrc: emotional,
    description: "Your ability to manage emotions and social relationships",
    progress: "2/10",
  },
];

const CandidateHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative candidate min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Text Block */}
        <div className="flex-1 flex flex-col gap-5 text-center md:text-left">
          <p className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
            Choose an assessment
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Discover yourself through assessments tailored to your personality, career aptitude, and emotional intelligence.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            src={homeImg}
            alt="Candidate Home"
          />
        </div>
      </div>

      {/* Assessment Cards */}
      <div className="flex flex-wrap gap-6 justify-center w-full mt-16 lg:mt-32 md:mt-20 lg:px-4">
        {assessmentsData.map((a, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              withNoise
              className="w-full border-2 border-primary/50 max-w-md bg-gradient-to-br from-secondary/10 to-secondary rounded-xl shadow-2xl flex flex-col sm:flex-row md:flex-col items-center text-sky-900 py-3 px-2"
            >
              <div className="flex flex-col sm:flex-row md:flex-col items-center justify-center gap-4 w-full p-4">
                <img
                  src={a.imgSrc}
                  className="w-32 object-contain"
                  alt={a.title}
                />
                <div className="flex flex-col gap-1 items-center sm:items-start md:items-center text-center sm:text-left md:text-center">
                  <h2 className="text-lg font-semibold">{a.title}</h2>
                  <p className="text-sm">{a.description}</p>
                  <Button
                    onClick={() => navigate(`scales/${idx}`)}
                    className="mt-5"
                    variant="outline"
                    size="sm"
                  >
                    View More
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CandidateHome;
