import React, {useContext} from "react"
import { AuthContext } from "../context/AuthProvider";


function Profile() {

    const {username} = useContext(AuthContext)

    return ( 
        <>
            <h1>{username}'s Profile Page</h1>
        </>
     );
}

export default Profile;