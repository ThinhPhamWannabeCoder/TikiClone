import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { User1 } from '../../types/user';

const AuthContext = createContext<User1 | null>(null);

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

export default function AuthProvider({
  children,
  isSignedIn,
}: AuthProviderProps) {
  // Uses `isSignedIn` prop to determine whether or not to render a user
  const [user, setUser] = useState(null);

  const login = (input:User1) =>{
    console.log(input);
    console.log("old user", user)
    setUser(input)
    console.log("new user", user)

    
  }
  const logout = ()=>{
    setUser(null)
  }
  const hi = 1;
  return <AuthContext.Provider value={{user, hi, login, logout}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};