import { signAndRequest } from "../lib/aws-axios";

const userTypeHost: { [type: string]: string } = {
  admin: process.env.NEXT_PUBLIC_AWS_ADMIN_HOST,
  org: process.env.NEXT_PUBLIC_AWS_ADMIN_HOST,
  candidate: process.env.NEXT_PUBLIC_AWS_CANDIDATE_HOST,
};

export const signupService = {
  admin: async (
    name: string,
    email: string,
    password: string,
  ) => {
    const payload = {
      name: name,
      email: email,
      password: password,
    };

    const response = await signAndRequest(
      "POST",
      {},
      userTypeHost["admin"],
      "/default/psychometricAdmin/admin?action=register",
      payload
    );

    return response;
  },
  candidate: async (
    name: string,
    email: string,
    password: string,
  ) => {
    const payload = {
      name: name,
      email: email,
      password: password,
      organization_id: 1
    };

    const response = await signAndRequest(
      "POST",
      {},
      userTypeHost["candidate"],
      "/default/psychometricUser/user?action=register",
      payload
    );

    return response;
  },
};

export const loginService = {
  admin: async (
    email: string,
    password: string,
  ) => {
    const payload = {
      email: email,
      password: password,
    };
  
    const response = await signAndRequest(
      "POST",
      {},
      userTypeHost["admin"],
      "/default/psychometricAdmin/admin?action=login",
      payload
    );
  
    return response;
  },
  candidate: async (
    email: string,
    password: string,
  ) => {
    const payload = {
      email: email,
      password: password,
    };
  
    const response = await signAndRequest(
      "POST",
      {},
      userTypeHost["candidate"],
      "/default/psychometricUser/user?action=login",
      payload
    );
  
    return response;
  }
}