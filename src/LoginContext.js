import React, { useState, createContext} from "react";

export const LoginContext = createContext();

export const LoginProvider = props =>{
    const [login, setLogin] = useState("");

    return (
        <LoginContext.Provider value={login, setLogin}>
            {props.children}
        </LoginContext.Provider>
    )
}