import { useEffect, useState } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home';

function App() {
  const [backend, setBackend] = useState([{}])

  return (
    <div className='h-screen w-screen '>
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signup/>}></Route>

        <Route path='/' element={<Login/>}></Route>

        <Route path='/home' element={<Home/>}></Route>

        <Route path='*' element={<h1>Error 404 </h1>}></Route>
      </Routes>
    

      </BrowserRouter>
      {/*
        (typeof backend.user == 'undefined') ? (
        <p>Loading</p>
        ) : (
          backend.user.map((e)=>{
          return (<h1>{e}</h1>)
          })
        )*/
      }

      
    </div>
  )
}

export default App
