import {
  Provider,
  Session,
  User,
  SignInWithPasswordCredentials,
} from "@supabase/supabase-js";
import { AuthError } from "@supabase/supabase-js";
import { useCallback, useState } from "react";

import { useClient } from "@hooks";
import { initialState } from "./state";

export type UseSignInState = {
  error?: AuthError | null;
  fetching: boolean;
  session?: Session | null;
  user?: User | null;
};

export type UseSignInResponse = [
  UseSignInState,
  (
    credentials: SignInWithPasswordCredentials,
    options?: UseSignInOptions
  ) => Promise<Pick<UseSignInState, "error" | "session" | "user">>
];

export type UseSignInOptions = {
  redirectTo?: string;
  scopes?: string;
};

export type UseSignInConfig = {
  provider?: Provider;
  options?: UseSignInOptions;
};

export function useSignIn(config: UseSignInConfig = {}): UseSignInResponse {
  const client = useClient();
  const [state, setState] = useState<UseSignInState>(initialState);

  const execute = useCallback(
    async (
      credentials: SignInWithPasswordCredentials,
      options?: UseSignInOptions
    ) => {
      setState({ ...initialState, fetching: true });
      const { error, data } = await client.auth.signInWithPassword({
        ...credentials,
      });
      const { session, user } = data;
      const res = { error, session, user };
      setState({ ...res, fetching: false });
      return res;
    },
    [client, config]
  );

  return [state, execute];
}
