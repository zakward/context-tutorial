import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthProvider';
function Home() {
const {username} = useContext(AuthContext)
    return ( 
        <>
            <h1>Context Tutorial</h1>
            <h1>Welcome {username}!</h1>
            <h2>Important Steps to Remember</h2>
            <ul>
                <li>Create Context Component</li>
                <li>Export data through value property</li>
                <li>Wrap App in Context Provider</li>
                <li>Import the useContext hook</li>
                <li>Import the Created Context File</li>
                <li>Destructure Context Object</li>
            </ul>
        
        </>
     );
}

export default Home;