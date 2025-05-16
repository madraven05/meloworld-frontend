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

export type Therapist = {
  therapist_id: number;
  user_id: number | null;
  email: string;
  password: string;
  therapist_name: string;
  dob: string;
  license_number: string;
  specializations: string;
  assigned_user_ids: number[];
  metadata: any;
  created_at: string;
  updated_at: string;
};

export type Patient = {
  patient_id: number;
  user_id: number;
  symptoms: string[];
  progress: {
    notes: string;
    status: string;
    last_update: string;
  };
  history: {
    allergies: string[];
    past_conditions: string[];
    hospitalized_before: boolean;
  };
  created_at: string;
  updated_at: string;
  metadata: any;
  first_name: string;
  last_name: string;
  email: string;
};

export type UserRole = "candidate" | "admin" | "org" | "therapist";
