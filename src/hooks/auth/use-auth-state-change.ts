import { AuthChangeEvent, Session } from "@supabase/gotrue-js";
import { useEffect } from "react";

import { useClient } from "@hooks";

export function useAuthStateChange(
  callback: (event: AuthChangeEvent, session: Session | null) => void
) {
  const client = useClient();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { data: authListener } = client.auth.onAuthStateChange(callback);
    return () => {
      authListener.subscription?.unsubscribe();
    };
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */
}
