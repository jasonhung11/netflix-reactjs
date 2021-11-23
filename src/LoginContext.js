import React, { useState, createContext} from "react";

export const LoginContext = createContext();

console.log(LoginContext.Provider)
export const LoginProvider = props =>{
    const [login, setLogin] = useState("");

 
    return (
        <LoginContext.Provider value={{login, setLogin}}>
            {props.children}
        </LoginContext.Provider>
    )
}