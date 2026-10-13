import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import B from './B';

function A() {
    const navigate = useNavigate();
    const res = "Ab";
  return (
    <nav>
      hello {res}
      <button onClick={()=>{
        navigate("/B")
      }}>click me</button>
      {/* <B val={res}/> */}
    </nav>
  )
}

export default A
