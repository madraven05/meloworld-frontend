const QUIZ_HOST = import.meta.env.VITE_AWS_QUIZ_HOST;

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

  const response = await fetch(url, options);
  return response;
};
