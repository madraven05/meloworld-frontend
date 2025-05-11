import { retryFetch } from "@/lib/utils";

const CHAPTERS_HOST = process.env.NEXT_PUBLIC_AWS_CHAPTER_HOST;

export const getAllChapters = async (token: string, assessmentId: number) => {
  const url = `https://${CHAPTERS_HOST}/default/psychometricChapter/chapter?action=listChapters`;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ course_id: assessmentId }),
  };

  const response = await retryFetch(url, options);
  return response;
};

export const getChapterById = async (
  token: string,
  assessmentId: number,
  chapterId: number
) => {
  const url = `https://${CHAPTERS_HOST}/default/psychometricChapter/chapter?action=getChapter`;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ course_id: assessmentId, chapter_id: chapterId }),
  };

  const response = await retryFetch(url, options);
  return response;
};
