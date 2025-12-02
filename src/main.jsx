import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, Routes , Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Layout from './layout/Layout.jsx';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar.jsx';
import Users from './pages/Users.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Dashboard/>}/>
        <Route path='users' element={<Users/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
