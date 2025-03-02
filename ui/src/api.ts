import { CommandResult } from "./command";

const apiUrl = import.meta.env.VITE_API_URL;

export async function post({
  path,
  request,
}: PostRequest): Promise<CommandResult> {
  const requestUrl = `${apiUrl}${path}`;
  try {
    const httpResponse = await fetch(requestUrl, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!httpResponse.ok) {
      return httpErrorResult(httpResponse);
    }

    return successResult();
  } catch (error: unknown) {
    return errorResult(error);
  }
}

export interface PostRequest {
  path: string;
  request: object;
}

async function httpErrorResult(httpResponse: Response): Promise<CommandResult> {
  const response = await httpResponse.json();
  const errorResult: CommandResult = {
    success: false,
    error: response.title,
  };
  return errorResult;
}

function successResult(): CommandResult {
  const result: CommandResult = {
    success: true,
  };
  return result;
}

function errorResult(error: unknown): CommandResult {
  const result: CommandResult = {
    success: false,
    error: String(error),
  };
  return result;
}
