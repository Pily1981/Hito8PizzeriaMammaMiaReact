import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFount from '../assets/img/NotFount.jpeg';

const NotFound = () => {
  return (
     <Container className="d-flex justify-content-center align-items-center " style={{ height:'70vh'}}>
        <Row  className="text-center">
            <Col>
                <img src={NotFount} alt='Error 404' />
                <h3 className="mb-4">Página No Encontrada</h3>
                <p className="mb-4">Lo sentimos, la página que estás buscando no existe.</p>
                <Link to="/" className='boton3 text-white'>Volver al Inicio</Link>
            </Col>
        </Row>
      </Container>
    );
};

export default NotFound;