import React, { useContext } from 'react'
import { context } from './Context'
import { Navigate } from 'react-router-dom'

function Protected({ children }) {
    const { user } = useContext(context);

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
}

export default Protected;