import { post } from "./api";
import { CommandResult } from "./command";

export interface LoginRequest {
  username: string | null;
  password: string | null;
}

export async function logIn({
  username,
  password,
}: LoginRequest): Promise<CommandResult> {
  const request: ApiLoginRequest = {
    email: username ?? "",
    password: password,
  };
  return post({ path: "/login?useCookies=true", request });
}

export interface ApiLoginRequest {
  email: string;
  password: string | null;
}
