export type Assessment = {
  created_at: string;
  description: string;
  id: number;
  title: string;
  updated_at: string;
};

export type Chapter = {
  id: number;
  course_id: number;
  title: string;
  chapter_order: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
};

export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type Quiz = {
  id: number;
  chapter_id: number;
  title: string;
  questions: Question[];
  created_at: string; // or Date if you plan to parse it
  updated_at: string; // or Date if you plan to parse it
};

