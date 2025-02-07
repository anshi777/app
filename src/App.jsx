import './App.css'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import Cart from './Components/Cart';
import NykaCard from './Components/NykaCard';
import { UserProvider,useUser } from './UserContext/UserContext';
import Login from './Login/Login';
import SignupForm from './Login/SignupForm'





function App() {

  return (
    <>
    <UserProvider>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignupForm/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/nykaCard' element={<NykaCard/>}/>
    </Routes>
    </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App
