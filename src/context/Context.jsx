import { createContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"
export const context = createContext(null);

export const CounterProvider = (props)=>{
    const [token,settoken] = useState()
    const [user,setuser] = useState()
    const [isactive,setisactive]= useState(false)
    const login = (data)=>{
        const token = data.access_token
        localStorage.setItem("token",token)
        settoken(token)
        const decode = jwtDecode(token)
        setuser(decode)
        setisactive(true)
    }
    const logout = ()=>{
        localStorage.removeItem("token")
        settoken(null)
        setuser(null)
    }
    useEffect(()=>{
      const storedToken=localStorage.getItem("token");
      if (storedToken) {
            settoken(storedToken);

            const decoded = jwtDecode(storedToken);
            setuser(decoded);
            setisactive(true)
        }
    },[])
return <context.Provider value={{login,user,setisactive,isactive,setuser,logout}}>
    {props.children}
    </context.Provider>
}
