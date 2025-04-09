import { signAndRequest } from "../../lib/aws-axios";

const ASSESSMENT_HOST = import.meta.env.VITE_AWS_ASSESSMENT_HOST;

export const getAllAssessments = async (token: string) => {
    const url = `https://${ASSESSMENT_HOST}/default/psychometricCourse/course?action=listCourses`
  const options = {
    method: 'POST',
    headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    body: undefined
  }

  const response = await fetch(url, options);
  return response;
};
