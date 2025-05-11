import React from "react";
import CandidateHome from "./candidate-home";
import ProtectedRoute from "@/components/protected-route";

const CandidateIndex = () => {
  return (
    <>
      <ProtectedRoute>
        <CandidateHome />
      </ProtectedRoute>
    </>
  );
};

export default CandidateIndex;
