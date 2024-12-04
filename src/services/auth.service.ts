import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthTokenResponse } from "@supabase/supabase-js";

export const loginWithEmailPassword = async (
  email: string,
  password: string
): Promise<AuthTokenResponse> => {
  const supabase = createClientComponentClient();
  const res = await supabase.auth.signInWithPassword({ email, password });

  return res;
};
