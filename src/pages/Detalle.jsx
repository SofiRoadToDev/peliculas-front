import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import './Detalle.css'


const Detalle = () => {
  return (
    <Container>
        <Row className="text-center mb-4 text-light">
            <h2>El gato con botas</h2>
        </Row>
        <Row className='justify-content-around '>
            <Col sm={12} md={6} lg={6} >
                <Figure.Image
                     width={500}
                     height={500}
                     alt="gato con botas"
                     src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/12/gato-botas-ultimo-deseo-2907720.jpg?itok=AdhaDor2"
                />

            </Col>
            <Col sm={12} md={6} lg={6} className='text-light'>
                
                    <p>Fecha de Estreno:12/02/2023</p>
                    <p>Personajes: El gato con botas</p>
                    <p>Capficacion: 8</p>
                    <Accordion defaultActiveKey="0" className='bg-dark'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Descripción</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
               </Accordion>
            </Col>
            <h3 className='text-center m-3 text-light'>Trailer</h3>
            <Col sm={12} md={8} lg={8}>
            
             <iframe width="100%" height="600" src="https://www.youtube.com/embed/O_pRSxYuSU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>

        </Row>
        <Row></Row>
    </Container>
  )
}

export default Detalle