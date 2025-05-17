import { signAndRequest } from "@/lib/aws-axios";

const PATIENT_HOST = process.env.NEXT_PUBLIC_AWS_PATIENT_HOST as string;
const THERAPIST_HOST = process.env.NEXT_PUBLIC_AWS_THERAPIST_HOST as string;

export const loginTherapist = async (email: string, password: string) => {
  const response = await signAndRequest(
    "POST",
    {},
    THERAPIST_HOST,
    "/default/therapistHandlerAPI?action=loginTherapist",
    { email: email, password: password }
  );
  return response;
};

export const getPatientById = async (patientId: number) => {
  const response = await signAndRequest(
    "POST",
    {},
    PATIENT_HOST,
    "/default/patientHandlerAPI?action=getPatient",
    { patient_id: patientId }
  );
  return response;
};

export const getTherapistById = async (therapistId: number) => {
  const payload = { therapist_id: therapistId };
  const response = await signAndRequest(
    "POST",
    {},
    THERAPIST_HOST,
    "/default/therapistHandlerAPI?action=getTherapistProfile",
    payload
  );
  return response;
};

export const getAssignedPatientsByTherapistId = async (therapistId: number) => {
  const payload = { therapist_id: therapistId };
  const response = await signAndRequest(
    "POST",
    {},
    THERAPIST_HOST,
    "/default/therapistHandlerAPI?action=getAssignedPatients",
    payload
  );
  return response;
};
