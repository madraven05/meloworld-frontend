import React, { useEffect, useState } from "react";
import homeImg from "@/assets/candidate-home-illustration.png";
import emotional from "@/assets/personality.png";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useAuthStore } from "@/components/stores/auth-store";
import { Assessment } from "@/components/types";
import { getAllAssessments } from "@/services/assessments";
import { PinContainer } from "@/components/ui/3d-pin";
import Card from "@/components/ui/card/card";
import Button from "@/components/ui/button/button";

// const assessmentsData = [
//   {
//     title: "Personality",
//     imgSrc: emotional,
//     description: "Personality traits, motivations, and behavioral tendencies",
//     progress: "2/10",
//   },
//   {
//     title: "Career",
//     imgSrc: suitcase,
//     description: "Suitability for job roles or help identify career paths",
//     progress: "2/10",
//   },
//   {
//     title: "Emotional and Social Intelligence",
//     imgSrc: peace,
//     description: "Your ability to manage emotions and social relationships",
//     progress: "2/10",
//   },
// ];

const CandidateHome: React.FC = () => {
  const router = useRouter();
  const { token } = useAuthStore();
  const [courseData, setCourseData] = useState<Assessment[]>([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      if (token) {
        try {
          const response = await getAllAssessments(token);
          if (response?.ok) {
            const data = await response.json();
            // assume the payload is { courses: Assessment[] }
            const courses: Assessment[] = data.courses ?? [];
            console.log("fetched courses:", courses);
            setCourseData(courses);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchAssessments();
  }, []);

  return (
    <div className="relative p-10 lg:py-20 lg:px-40 min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Text Block */}
        <div className="flex-1 flex flex-col gap-5 text-center md:text-left">
          <p className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
            Choose an assessment
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Discover yourself through assessments tailored to your personality,
            career aptitude, and emotional intelligence.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            src={homeImg.src}
            alt="Candidate Home"
          />
        </div>
      </div>

      {/* Assessment Cards */}
      <div className="flex flex-wrap gap-6 justify-center w-full mt-16 lg:mt-32 md:mt-20 lg:px-4">
        {courseData.map((a, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <PinContainer
              title="Progress"
              // href="scales/2"
              containerClassName="block w-full mx-auto" // outer hit‑area / layout
              className="w-72 lg:w-96" // inner card wrapper
            >
              <Card className="w-full border-primary/50 max-w-md bg-gradient-to-br from-secondary/10 to-secondary rounded-xl shadow-2xl flex flex-col sm:flex-row md:flex-col items-center text-sky-900 py-3 px-2">
                <div className="flex flex-col sm:flex-row md:flex-col items-center justify-center gap-4 w-full p-4">
                  <img
                    src={emotional.src}
                    className="w-32 object-contain"
                    alt={a.title}
                  />
                  <div className="flex flex-col gap-1 items-center sm:items-start md:items-center text-center sm:text-left md:text-center">
                    <h2 className="text-lg font-semibold">{a.title}</h2>
                    <p className="text-sm">{a.description}</p>
                    <Button
                      onClick={() => router.push(`/candidate/course/${a.id}`)}
                      className="mt-5"
                      variant="outline"
                      size="sm"
                    >
                      View More
                    </Button>
                  </div>
                </div>
              </Card>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CandidateHome;
