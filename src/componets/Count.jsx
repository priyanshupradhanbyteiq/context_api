import React, { useContext } from 'react'
import { context } from '../context/Context'

function Count() {
    const {user,logout} = useContext(context);
  return (
    <div>
        <h1>
            hello {user?.sub}

        </h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Count