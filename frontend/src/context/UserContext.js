import {createContext,useState} from "react";
import Axios from "axios"

export const UserContext = createContext();

export const UserProvider =({children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [token,setToken] = useState(null)

    const values={
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}