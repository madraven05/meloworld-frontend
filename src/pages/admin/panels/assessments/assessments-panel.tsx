import React from "react";
import { Route, Routes } from "react-router-dom";
import AssessmentsHome from "./assessments-home";
import ChapterPanel from "./chapter-panel";

const AssessmentsPanel: React.FC = () => {
  return (
    <div className="dashboard-panel">
      <Routes>
        <Route path="/" element={<AssessmentsHome/>}/>
        <Route path="/chapter/:assessmentId/:chapterId" element={<ChapterPanel/>}/>
      </Routes>
    </div>
  );
};

export default AssessmentsPanel;
