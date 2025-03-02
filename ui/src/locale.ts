export interface Locale {
  login: LoginLocale;
}

export interface LoginLocale {
  title: string;
  username: string;
  password: string;
  logIn: string;
  errorTitle: string;
  successTitle: string;
}

export const polishLocale: Locale = {
  login: {
    title: "Logowanie",
    username: "Email",
    password: "Hasło",
    logIn: "Zaloguj się",
    errorTitle: "Błąd logowania",
    successTitle: "Sukces",
  },
};
