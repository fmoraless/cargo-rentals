"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Session, User } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IUserSessionContext {
  user?: User;
  session?: Session | null;
}

interface Props {
  children: React.ReactNode;
}

export const UserSessionContext = createContext<IUserSessionContext>(
  null as any
);

export const UserSessionContextProvider = ({ children }: Props) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | undefined>(undefined);

  const supabase = createClientComponentClient();

  // TODO: subscribe to auth state changes
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user);
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth]);
  return (
    <UserSessionContext.Provider value={{ user, session }}>
      {children}
    </UserSessionContext.Provider>
  );
};

export const useUserSessionContext = () => {
  const context = useContext(UserSessionContext);
  return context;
};
