import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-50'>

            <section className=''>
                <MDBContainer className='text-center text-md-start '>
                    <MDBRow className='mt-3 d-flex justify-content-center align-items-center'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <Link to={process.env.PUBLIC_URL + "/"}><img alt='isotipo' src={require('../assets/img/isotipo-s.png')} /></Link>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className=' fw-bold mb-4'><Link to={process.env.PUBLIC_URL + "/"}> Inicio </Link></h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Link to={"category/cafe"}>Café en granos </Link>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Link to={"category/accesorios"}>Barista Tools </Link>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Link to={"category/vajilla"}>Vajilla </Link>
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Calle Falsa 123, Ciudad Autonoma de Buenos Aires, Argentina
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@ejemplo.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 54 234 567 88
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='text-reset fw-bold' href='https://github.com/Gonztantinopla'>
                    Gonzalo Damian Salgado
                </a>
            </div>
        </MDBFooter>
    );
}