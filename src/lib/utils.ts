import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const retryFetch = async (url: string, options: RequestInit, retries = 3, delay = 500): Promise<Response> => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok && attempt < retries - 1) {
        await new Promise(res => setTimeout(res, delay * (attempt + 1))); // Exponential backoff
        continue;
      }
      return response;
    } catch (err) {
      if (attempt < retries - 1) {
        await new Promise(res => setTimeout(res, delay * (attempt + 1)));
      } else {
        throw err;
      }
    }
  }
  throw new Error("Failed after retries");
};
