import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {Layout as AuthLayout} from './pages/auth/layout'
import adminImage from "./assets/admin-login-3d.png";
import orgLogin from "./assets/org-login.png";
import Navbar from './components/navbar';


function App() {

  return (
    <>
    <Navbar/>
     <Router>
      <Routes>
        <Route path='/admin/login' element={<AuthLayout imgSrc={adminImage}/>}/>
        <Route path='/org/login' element={<AuthLayout imgSrc={orgLogin}/>}/>

      </Routes>
     </Router>
    </>
  )
}

export default App
