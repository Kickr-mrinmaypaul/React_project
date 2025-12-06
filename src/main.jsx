import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, Routes , Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Layout from './layout/Layout.jsx';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar.jsx';
import Users from './pages/Users.jsx';
import ViewUsers from './pages/ViewUsers.jsx';
import Admin from './pages/Admin.jsx';
import RegisterForm from './pages/RegisterForm.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Dashboard/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path="users/viewusers" element={<ViewUsers/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='admin' element={<Admin/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
