import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet className='vh-80' />
            <Footer />
        </div>
    )
}

export default Layout