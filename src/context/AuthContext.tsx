import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabase-client";

type SessionType = any | null | undefined;

type AuthContextType = {
  session: SessionType;
  signUpNewUser: (email: string, password: string) => Promise<any>;
  signInUser: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type ProviderProps = {
  children: any;
};

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [session, setSession] = useState<SessionType>(undefined);

  // Sign Up
  const signUpNewUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log("There was a problem signing up:", error);
      return { success: false, error };
    }
    return { success: true, data };
  };

  // Sign In
  const signInUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("an error occured:", error);
        return { success: false, error: error.message };
      }
      console.log("sign-in success:", data);
      return { success: true, data };
    } catch (error) {
      console.error("an error occured:", error);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // Sign Out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ session, signInUser, signOut, signUpNewUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthContextProvider");
  }
  return ctx;
};
