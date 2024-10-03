import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//Componentes importados
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

//Pages importadas
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Logout from "./pages/Logout";

//Context importado
import CartProvider from "./context/CartContext";
import { useUser } from "./context/UserContext";

function App() {
  const { token } = useUser;

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />         
            <Route path="/Cart" element={<Cart />}/>
            <Route path="/Pizza/:id" element={<Pizza />}/>
            <Route path="/Profile"  element={token ? <Navigate to="/Login" /> : <Profile />}/>
            <Route path="/Logout" element={<Logout />} />   
            <Route path="404" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>   
  
    </>
  );
}

export default App;