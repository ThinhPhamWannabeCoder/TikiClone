import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { User} from '../../types/user';

interface ContextProps{
  data: User | null;
  login: (input: User)=> void;
  logout: (input: User) => void;
  // testf : (input: number)=>void;
  // test: number
}


const AuthContext = createContext<ContextProps | undefined>(undefined);

export default function AuthProvider({
  children
}: PropsWithChildren) {

  const [user, setUser] = useState<User | null>(null);
  // const [number1, setNumber] = useState<number>(1);
  // const testf = (input:number) =>{
  //   setNumber(input)
  // }
  const login = (input:User) =>{
    setUser(input)
  }
  const logout = ()=>{
    setUser(null)
  }
  const contextValue: ContextProps={
    data: user,
    login: login,
    logout: logout,
    // testf: testf,
    // test: number1
  }
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context?.data === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export const useAuthContext = () =>{
  return useContext(AuthContext);
}