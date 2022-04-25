import { createContext,useState } from "react";

 export const AuthContext = createContext()

 export const AuthContextProvider = ({children})=>{
     const [isAuth, setIsAuth] = useState(false)

      const handleAuth = (s)=>{
        setIsAuth(s)
      }
      return <AuthContext.Provider value={{isAuth,handleAuth}}>{children}</AuthContext.Provider>
 }