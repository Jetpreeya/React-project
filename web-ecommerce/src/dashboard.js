import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './component/buttons/Auth'
import firebaseConfig from './ConFig'
// Context by AuthContext
const DashBoard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate to ="/" />;
    }
    return (
        <div>
            <div className="container mt-5" >
            <div className = "text-center">
                <h1>Welcome to Jet E-commerce</h1>
                <p> If you can see this you're registed and logged in.</p>
                <button onClick={() => firebaseConfig.auth().signOut()} className="btn btn-dark">Sign Out</button>
            </div>
            </div>
        </div>
    )
}

export default DashBoard;