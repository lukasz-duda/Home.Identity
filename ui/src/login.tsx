import { Button, Card, Flex, Form, notification } from "antd";
import {
  CommandResult,
  PasswordField,
  TextField,
  useCommand,
} from "home-shared-ui";
import { useState } from "react";
import { logIn } from "./identity-api";
import { polishLocale } from "./locale";

const { login } = polishLocale;

export function Login() {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  function logInUser(): Promise<CommandResult> {
    return logIn({ username, password });
  }

  const [api, contextHolder] = notification.useNotification();

  const { execute, pending } = useCommand({
    command: logInUser,
    onSuccess: () => {
      api.success({ message: login.successMessage });
    },
    warning: api.warning,
    errorMessage: login.errorMessage,
  });

  return (
    <>
      {contextHolder}
      <Flex justify="center" align="center" style={{ height: "100vh" }}>
        <Card title={login.title}>
          <Form>
            <TextField
              label={login.username}
              value={username}
              onChange={setUsername}
            />
            <PasswordField
              label={login.password}
              value={password}
              onChange={setPassword}
            />
            <Button
              type="primary"
              htmlType="submit"
              onClick={execute}
              disabled={pending}
              loading={pending}
            >
              {login.logIn}
            </Button>
          </Form>
        </Card>
      </Flex>
    </>
  );
}
