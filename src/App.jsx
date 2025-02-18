// import './App.css'
// import "./index.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Components/Home';
// import { BrowserRouter, Route, Routes } from 'react-router';
// import Cart from './Components/Cart';
// import NykaCard from './Components/NykaCard';
// import Login from './Login/Login';
// import SignupForm from './Login/SignupForm'

// function App() {

//   return (
//     <>
//      <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/signup' element={<SignupForm/>}/>
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/cart' element={<Cart/>}/>
//       <Route path='/nykaCard' element={<NykaCard/>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App


import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import NykaCard from "./Components/NykaCard";
import Login from "./Login/Login";
import SignupForm from "./Login/SignupForm";
import NavBar from "./Components/NavBar"; 
import ErrorBoundary from "./Components/ErrorBoundry/ErrorBoundry";
import FilteredProduct from "./Components/Products/FilteredProduct";
import FilteredBrandProduct from "./Components/FiltedBrandProduct";
import Wishlist from "./Components/WishList/WishList";
import Auth from "./Components/AdminPannel/Auth";
import AdminDashboard from "./Components/AdminPannel/AdminDashBoard";
import Seller from "./Components/ForSeller/Seller";

function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter>
      <NavBar  /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/nykaCard" element={<NykaCard />} />
        <Route path="/filteredproduct" element={<FilteredProduct />} />
        <Route path="/filteredBrandProduct" element={<FilteredBrandProduct />} />
        <Route path="/wishList" element={<Wishlist />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/admin" element={<Auth />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
