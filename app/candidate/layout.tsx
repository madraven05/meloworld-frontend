import React, { ReactNode } from "react";
import CandidateHome from "./page";
import ProtectedRoute from "@/components/protected-route";

const CandidateLayout:React.FC<{children: ReactNode}> = ({
  children
}) => {
  return (
    <>
      <ProtectedRoute>
        {children}
      </ProtectedRoute>
    </>
  );
};

export default CandidateLayout;
