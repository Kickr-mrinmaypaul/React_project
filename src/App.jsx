import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
function App() {
  
  return (
    <>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Dashboard/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
