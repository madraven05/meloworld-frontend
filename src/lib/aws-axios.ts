import { AwsClient } from 'aws4fetch';

const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
const secretAccessKey = import.meta.env.VITE_AWS_AUTH_SECRET
const region = import.meta.env.VITE_AWS_REGION
const service = import.meta.env.VITE_AWS_ADMIN_HOST

export async function signAndRequest(
  method: string,
  headers: Record<string, string>,
  hostname: string,
  path: string,
  body?: Record<string, unknown>
) {
  const url = `https://${hostname}${path}`;
  const options = {
    method: method, 
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  console.log(options);

  const client = new AwsClient({
    accessKeyId,
    secretAccessKey,
    region,
    service,
  });
  
  const response = await client.fetch(url, options);
  const data = await response.json();

  return {
    status: response.status,
    ok: response.ok,
    data,
    headers: response.headers,
  };
}
