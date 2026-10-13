import React, { useContext } from 'react'
import Count from './componets/Count'
import { context } from './context/Context';
import { Route, Routes } from 'react-router-dom';
import Login from './componets/Login';
import Protected from './context/Protected';
import A from './componets/A';
import B from './componets/B';

function App() {
  const res = useContext(context);
  return (
    
    <Routes>
      <Route path='/' element={<Login/>}/>
     
      <Route path='/Count' element ={ <Protected><Count/></Protected>}/>
      <Route path='/A' element ={ <A/>}/>
      
    </Routes>
  )
}

export default App