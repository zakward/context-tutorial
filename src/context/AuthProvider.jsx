// imports
import React, {useState, createContext} from "react"

// instantiates variable to provide and consume context
export const AuthContext = createContext()

// AuthProvider component
export default function AuthProvider(props){

    // state to be passed by context
    const [username, setUsername] = useState("Michael Jordan")

    return (
        //  value tag gets all data you want to consume
        <AuthContext.Provider value = {{username}}>
            {props.children}
        </AuthContext.Provider>
    )
}