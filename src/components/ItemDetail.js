import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import ItemCount from './ItemCount'

function ItemDetail({ detalleItem }) {
    return (
        <div className='d-flex justify-content-center'>
            <MDBCard >
                <MDBCardImage position='top' alt='...' src='https://www.modobarista.com/product_images/l/093/Catuai__98631_zoom.png' />
                <MDBCardBody>
                    <MDBCardTitle>{detalleItem.name}</MDBCardTitle>
                    <MDBCardText>
                        {detalleItem.resumen}
                    </MDBCardText>
                </MDBCardBody>
                <MDBListGroup flush>
                    <MDBListGroupItem>{detalleItem.description}</MDBListGroupItem>
                    <MDBListGroupItem><ItemCount stock={detalleItem.stock} /></MDBListGroupItem>
                </MDBListGroup>
            </MDBCard>
        </div >
    );
}

export default ItemDetail