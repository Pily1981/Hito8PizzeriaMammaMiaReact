import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";
import { useNavigate } from "react-router";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate();

    const emailCheck = (email) => {
        const check = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        return check.test(String(email).toLowerCase())
    }


// Validaciones:
  const validarDatos= (e) => {
    e.preventDefault();

    if (!emailCheck(email)) {
        alert("Ingrese un email válido")
        return false
    }
    if (email ==="" || password ==="") {
      alert("Todos los campos son obligatorios");
      navigate("/register");
    }

    if (password.length <6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        navigate("/register");;
    }
    alert("Inicio de sesion exitoso!")
    setEmail("")
    setPassword("")
    navigate("/Profile");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">   
        <div className="d-flex flex-column justify-content-center align-items-center border border-2 border-dark rounded-2 gap-2 mt-2 mb-2 pt-3 pb-3" style={{ width: "350px" }}>                      
        <h3>Inicio de Sesion</h3>     
        <Form>    
        <div className="form-label mr-4 mx-4">
            <label>Email:</label>
            <input type="email" className="form-control" placeholder="Ingrese Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="form-group mr-4 mx-4">
            <label>Contraseña:</label>
            <input type="password" className="form-control" placeholder="Ingrese Password" value={password} onChange={(e) => setPassword(e.target.value)}required/>
        </div>
         <Button type="submit" className="btn btn-dark mb-2 mr-4 mx-4" onClick={(e)=> validarDatos(e)}>Iniciar Sesión</Button>                        
        </Form>
        </div>           
    </div>
  );
};

export default Login;