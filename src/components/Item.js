import React from 'react'
import { Link } from 'react-router-dom'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBCol
} from 'mdb-react-ui-kit';

function Item({ productoItem }) {

    return (
        <MDBCol className="pt-5" size='md-6'>
            <MDBCard alignment='center' className='hover-shadow ' >
                <MDBCardImage className='img-fluid' src={productoItem.img} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>{productoItem.name}</MDBCardTitle>
                    <MDBCardText>
                        {productoItem.resumen}
                    </MDBCardText>
                    <MDBCardText>
                        ${productoItem.precio}
                    </MDBCardText>
                </MDBCardBody>
                <MDBBtn color='dark'><Link to={process.env.PUBLIC_URL + "/item/" + productoItem.id} > Ver Producto </Link></MDBBtn>
            </MDBCard>
        </MDBCol>

    )
}

export default Item

