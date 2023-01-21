import { AuthError } from "@supabase/supabase-js";
import { useCallback, useState } from "react";

import { useClient } from "@hooks";

export type UseSignOutState = {
  error?: AuthError | null;
  fetching: boolean;
};

export type UseSignOutResponse = [
  UseSignOutState,
  () => Promise<Pick<UseSignOutState, "error">>
];

const initialState = {
  error: undefined,
  fetching: false,
};

export function useSignOut(): UseSignOutResponse {
  const client = useClient();
  const [state, setState] = useState<UseSignOutState>(initialState);

  const execute = useCallback(async () => {
    setState({ ...initialState, fetching: true });
    const { error } = await client.auth.signOut();
    const res = { error };
    setState({ ...res, fetching: false });
    return res;
  }, [client]);

  return [state, execute];
}
