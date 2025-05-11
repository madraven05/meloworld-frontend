import { retryFetch } from "@/lib/utils";

const QUIZ_HOST = process.env.NEXT_PUBLIC_AWS_QUIZ_HOST;

export const getAllQuizzesByChapter = async (
  token: string,
  chapterId: number
) => {
  const url = `https://${QUIZ_HOST}/default/psychometricQuiz/quiz?action=listQuizzes`;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chapter_id: chapterId }),
  };

  const response = await retryFetch(url, options);
  return response;
};

export const getQuizByChapter = async (
  token: string,
  chapterId: number,
  quizId: number,
) => {
  console.log("pingu")
  const url = `https://${QUIZ_HOST}/default/psychometricQuiz/quiz?action=getQuiz`;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chapter_id: chapterId, quiz_id: quizId }),
  };

  const response = await retryFetch(url, options);
  return response;
};

export const updateQuiz = async (
  token: string,
  body: string
) => {
  const url = `https://${QUIZ_HOST}/default/psychometricQuiz/quiz?action=updateQuiz`;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body,
  };

  const response = await retryFetch(url, options);
  return response;
}