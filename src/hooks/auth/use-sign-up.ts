import {
  Session,
  User,
  AuthError,
  SignInWithPasswordCredentials,
} from "@supabase/supabase-js";
import { useCallback, useState } from "react";

import { useClient } from "@hooks";
import { initialState } from "./state";

export type UseSignUpState = {
  error?: AuthError | null;
  fetching: boolean;
  session?: Session | null;
  user?: User | null;
};

export type UseSignUpResponse = [
  UseSignUpState,
  (
    credentials: SignInWithPasswordCredentials,
    options?: UseSignUpOptions
  ) => Promise<Pick<UseSignUpState, "error" | "session" | "user">>
];

export type UseSignUpOptions = {
  redirectTo?: string;
};

export type UseSignUpConfig = {
  options?: UseSignUpOptions;
};

export function useSignUp(config: UseSignUpConfig = {}): UseSignUpResponse {
  const client = useClient();
  const [state, setState] = useState<UseSignUpState>(initialState);

  const execute = useCallback(
    async (
      credentials: SignInWithPasswordCredentials,
      options?: UseSignUpOptions
    ) => {
      setState({ ...initialState, fetching: true });
      const { error, data } = await client.auth.signUp(credentials);
      const { session, user } = data;
      const res = { error, session, user };
      setState({ ...res, fetching: false });
      return res;
    },
    [client, config]
  );

  return [state, execute];
}
