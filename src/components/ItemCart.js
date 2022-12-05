import React from 'react';
import { MDBListGroupItem, MDBBtn } from 'mdb-react-ui-kit';
import { useCartContext } from '../context/CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext()

    return (


        <MDBListGroupItem className='d-flex justify-content-between align-items-center' >
            <div className='d-flex align-items-center'>
                <img
                    src={product.img}
                    alt='imagen producto'
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                />
                <div className='ms-3'>
                    <p className='fw-bold mb-1'>{product.name}</p>
                    <p className='text-muted mb-0'>subtotal:${product.quantity * product.precio}  '{product.quantity} x {product.precio}' </p>
                </div>
            </div>
            <MDBBtn size='sm' rounded color='link' onClick={() => removeProduct(product.id)}>
                Eliminar
            </MDBBtn>
        </MDBListGroupItem >

    );
}

export default ItemCart