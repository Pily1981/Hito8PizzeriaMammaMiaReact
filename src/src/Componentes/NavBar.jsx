import React, { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { formatNumber } from "../scripts";
import { useUser } from "../context/UserContext";

function NavbarApp() {
  const { total } = useContext(CartContext);
  const { token } = useUser()
  const setActiveClass = ({ isActive }) => (isActive ?  "active" : "NoActive");

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar" sticky="top">
        <Container>
            <Navbar.Brand class="titulo" className="text-white">          
                Pizzería Mamma Mia!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className={setActiveClass}>🍕 Home </NavLink>                        
                            {token ? (
                            <>
                                <NavLink to="/profile" className={setActiveClass}>🔓Profile</NavLink>                
                                <NavLink to="/Logout" className={setActiveClass}>🔒Logout</NavLink>
                            </>
                            ) : (
                            <>
                                <NavLink to="/Login" className={setActiveClass}>🔐Login</NavLink>
                                <NavLink to="/register" className={setActiveClass}>🔐Register</NavLink>                  
                            </>
                            )}
                    </Nav>
                            {token && (                           
                                <NavLink to="/Cart" className={setActiveClass}>🛒Total: {formatNumber(total)}</NavLink>                                                   
                            )}
                </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
                    

export default NavbarApp;