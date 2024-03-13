import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { User} from '../../types/user.types';

interface ContextProps{
  data: User | undefined;
  login: (input: User)=> void;
  logout: () => void;
  // testf : (input: number)=>void;
  // number1: number
}


const AuthContext = createContext<ContextProps | undefined>(undefined);

export default function AuthProvider({
  children
}: PropsWithChildren) {

  const [user, setUser] = useState<User | undefined>(undefined);
  // const [number1, setNumber] = useState<number>(1);
  // const testf = (input:number) =>{
  //   setNumber(input)
  // }
  const login = (input:User) =>{
    setUser(input)
  }
  const logout = ()=>{
    setUser(undefined)
  }
  const contextValue: ContextProps={
    data: user,
    login: login,
    logout: logout,
    // testf: testf,
    // number1: number1
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