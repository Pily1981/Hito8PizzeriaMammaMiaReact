import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Logout = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center " style={{ height:'50vh'}}>
           <Row  className="text-center">
               <Col>
                   <h5 className="mb-4">Vuelve Pronto!!</h5>
                   <Link to="/" className='boton3 bnt-primery text-white'>🍕 Home</Link>
               </Col>
           </Row>
         </Container>
       );
   };
  
export default Logout;