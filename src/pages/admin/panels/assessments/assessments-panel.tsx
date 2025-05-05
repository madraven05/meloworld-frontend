import React from "react";
import { Route, Routes } from "react-router-dom";
import AssessmentsHome from "./assessments-home";
import ChapterPanel from "./chapter-panel";
import assessmentImg from "../../../../assets/Exams-amico.png"

const AssessmentsPanel: React.FC = () => {
  return (
    <div className="dashboard-panel">
      <img src={assessmentImg} className="fixed opacity-15 -z-10 lg:w-1/2 lg:-translate-x-1/3 left-1/2 top-1/2 mt-10 lg:p-10 -translate-y-1/2 -translate-x-1/2"/>
      <Routes>
        <Route path="/" element={<AssessmentsHome/>}/>
        <Route path="/chapter/:assessmentId/:chapterId" element={<ChapterPanel/>}/>
      </Routes>
    </div>
  );
};

export default AssessmentsPanel;
