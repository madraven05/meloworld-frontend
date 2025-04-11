import { UserType } from "../components/stores/auth-store";
import { signAndRequest } from "../lib/aws-axios";

const userTypeHost: { [type: string]: string } = {
  ADMIN: import.meta.env.VITE_AWS_ADMIN_HOST,
};

export const signup = async (
  name: string,
  email: string,
  password: string,
  userType: UserType
) => {
  const payload = {
    name: name,
    email: email,
    password: password,
  };

  const response = await signAndRequest(
    "POST",
    {},
    userTypeHost[userType],
    "/default/psychometricAdmin/admin?action=register",
    payload
  );

  return response;
};

export const login = async (
  email: string,
  password: string,
  userType: UserType
) => {
  const payload = {
    email: email,
    password: password,
  };

  const response = await signAndRequest(
    "POST",
    {},
    userTypeHost[userType],
    "/default/psychometricAdmin/admin?action=login",
    payload
  );

  return response;
};
