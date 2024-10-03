import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";


const Register=()=>{
    const [email, setEmail]= useState ("");
    const [password, setPassword]= useState ("");
    const [confPassword, setConfPassword]= useState ("");
    
    const emailCheck = (email) => {
        const check = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        return check.test(String(email).toLowerCase())
      }


 // Validaciones:
    const validarDatos =(e)=>{
        e.preventDefault()

        if (!emailCheck(email)) {
            alert("Ingrese un email válido")
            return false
        }

        if (email ==="" || password ==="" || confPassword===""){
           alert ("Todos los campos son obligatorios")
            return false
        }

        if (password.length <6){
            alert ("El password debe tener al menos 6 caracteres")
            return false
        }
        if (password !== confPassword){
            alert ("El password y la confirmación del password deben ser iguales")
            return false
        }
        alert("Formulario enviado con éxito!")
        setEmail("")
        setPassword("")
        setConfPassword("")
        return true
    }

    return (
        <div className="d-flex justify-content-center align-items-center">   
            <div className="d-flex flex-column justify-content-center align-items-center border border-2 border-dark rounded-2 gap-2 mt-2 mb-2 pt-3 pb-3" style={{ width: "350px" }}>                      
            <h3>Formulario de Registro</h3>    
            <Form>                  
            <div className="form-label mr-4 mx-4">
                <label>Email:</label>
                <input type="email" className="form-control" placeholder="Ingrese Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group mr-4 mx-4">
                <label>Contraseña:</label>
                <input type="password" className="form-control" placeholder="Ingrese Password" value={password} onChange={(e) => setPassword(e.target.value)}required/>
            </div>
            <div className="form-group mr-4 mx-4">          
                <label>Confirmar Password</label>
                <input type="password" className="form-control" placeholder="Confirme password" value={confPassword} onChange={(e) => setConfPassword (e.target.value)} required/>
            </div>
                <Button type="submit" className="btn btn-dark mb-2 mr-4 mx-4" onClick={(e)=> validarDatos(e)}>Enviar</Button>                   
            </Form>
            </div>            
        </div>
    );

}

export default Register;