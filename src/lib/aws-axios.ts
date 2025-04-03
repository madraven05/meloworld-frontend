import axios, { AxiosPromise } from "axios";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { Sha256 } from "@aws-crypto/sha256-browser";

const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
const secretAccessKey = import.meta.env.VITE_AWS_AUTH_SECRET;
const region = import.meta.env.VITE_AWS_REGION;
const service = import.meta.env.VITE_AWS_SERVICE_NAME;

export async function signAndRequest(
    method: string,
    hostname: string,
    path: string,
    body?: Record<string, unknown>
  ): AxiosPromise {
    const request = new HttpRequest({
      method,
      hostname,
      path,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  
    // SigV4 signer
    const signer = new SignatureV4({
      credentials: { accessKeyId, secretAccessKey },
      region,
      service,
      sha256: Sha256,
    });
  
    const signed = await signer.sign(request);
    return await axios({
        method: signed.method,
        url: `https://${signed.hostname}${signed.path}`,
        headers: signed.headers,
        data: signed.body,
        validateStatus: () => true,
    });
  }
