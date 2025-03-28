import { CommandResult, post } from "home-shared-ui";

export interface LoginRequest {
  username: string | null;
  password: string | null;
}

export async function logIn({
  username,
  password,
}: LoginRequest): Promise<CommandResult> {
  const request: ApiLoginRequest = {
    username: username ?? "",
    password: password,
  };
  return post({ path: "/login", request });
}

export interface ApiLoginRequest {
  username: string;
  password: string | null;
}
