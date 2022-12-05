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
// import { UseCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { useCartContext, cartContext } from '../context/CartContext';


const ItemDetail = ({ product }) => {
    const [irCarrito, setIrCarrito] = useState(false)
    const { isInCart, addProduct } = useCartContext(cartContext);

    const getStock = () => {
        const item = isInCart(product.id)
        if (item)
            return product.quantity - item.quantity
        else
            return product.quantity
    }
    const onAdd = (quantity) => {
        setIrCarrito(true);
        addProduct(product, quantity)
    }

    return (
        <div className='d-flex justify-content-center'>
            <MDBCard >
                <MDBCardImage position='top' alt='...' src={product.img} />
                <MDBCardBody>
                    <MDBCardTitle>{product.name}</MDBCardTitle>
                    <MDBCardText>
                        {product.resumen}
                    </MDBCardText>
                </MDBCardBody>
                <MDBListGroup>
                    <MDBListGroupItem>{product.description}</MDBListGroupItem>
                    <MDBListGroupItem>${product.precio}</MDBListGroupItem>
                    <MDBListGroupItem>stock disponible:{product.stock}</MDBListGroupItem>
                    {/* {cartState.map(product => product)} */}
                    <MDBListGroupItem>
                        {irCarrito
                            ? <Link to={'/proyectofinal/cart'} > Producto agregado. Ir al carrito </Link>
                            : <ItemCount className='justify-content-center' stock={product.stock} onAdd={onAdd} />
                        }
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBCard>
        </div >
    );
}

export default ItemDetail