import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand ><Link to={process.env.PUBLIC_URL + "/"}><img alt='logotipo' src={require('../assets/img/logotipo-s.png')} /><img alt='isotipo' src={require('../assets/img/isotipo-s.png')} /></Link></MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-end'>
                        <MDBNavbarItem>
                            <MDBNavbarLink><Link to={process.env.PUBLIC_URL + "/"}> Inicio </Link></MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Categorías
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link><Link to={"category/cafe"}>Café en granos </Link> </MDBDropdownItem>
                                    <MDBDropdownItem link><Link to={"category/accesorios"}>Barista Tools </Link> </MDBDropdownItem>
                                    <MDBDropdownItem link><Link to={"category/vajilla"}>Vajilla </Link> </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <CartWidget />
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}