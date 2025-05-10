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
  description: string;
  chapter_order: number;
  created_at: string;
  updated_at: string;
};

export type Question = {
  question: string;
  type: "single" | "multiple" | "likert";
  options: string[];
  answer: string;
};

export type Quiz = {
  id: number;
  chapter_id: number;
  title: string;
  questions: Question[];
  created_at: string;
  updated_at: string;
};

export type UserRole = "candidate" | "admin" | "org" | "therapist";
