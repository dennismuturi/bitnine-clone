import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    console.log(user.user)
    let location = useLocation();

    if(!user.user.email) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute