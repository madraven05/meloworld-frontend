import { AwsClient } from "aws4fetch";

const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!;
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_AUTH_SECRET!;
const region = process.env.NEXT_PUBLIC_AWS_REGION!;
const service = process.env.NEXT_PUBLIC_AWS_ADMIN_HOST!;

export async function signAndRequest(
  method: string,
  headers: Record<string, string>,
  hostname: string,
  path: string,
  body?: Record<string, unknown>
) {
  const url = `https://${hostname}${path}`;
  const options: RequestInit = {
    method,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const client = new AwsClient({
    accessKeyId,
    secretAccessKey,
    region,
  });

  const maxRetries = 3;
  let lastError: unknown;
  let response: Response | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      response = await client.fetch(url, options);

      // If we got a 2xx, we're done
      if (response.ok) {
        break;
      }

      // Otherwise, non-2xx: if it's the last attempt, we'll exit loop and handle below,
      // else we retry.
      if (attempt < maxRetries) {
        console.warn(
          `Request to ${url} returned ${response.status}. Retrying ${attempt}/${maxRetries}...`
        );
        continue;
      }
    } catch (err) {
      lastError = err;
      if (attempt < maxRetries) {
        console.warn(
          `Network error on attempt ${attempt}/${maxRetries}: ${err}. Retrying...`
        );
        continue;
      }
      // last attempt failed with network error
      throw err;
    }
  }

  if (!response) {
    // This should never happen, but TS wants us to check
    throw new Error("Failed to make request: no response object");
  }

  // If after retries we still got a non-OK response, you can choose to throw or return it:
  // here we'll just return it so caller can inspect status/data.
  let data: any;
  try {
    data = await response.json();
  } catch (err) {
    data = null;
  }

  return {
    status: response.status,
    ok: response.ok,
    data,
    headers: response.headers,
  };
}
