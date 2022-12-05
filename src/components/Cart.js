import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import Link from './Link'
import { Comprador } from './Comprador';
import { MDBBadge, MDBListGroup, MDBListGroupItem, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const Cart = () => {
    const { totalPrice, cart, clearCart } = useCartContext()
    const [comprado, setComprado] = useState(false)
    const [idCompra, setIdCompra] = useState('')

    const orden = {
        product: cart.map(product => ({ id: product.id, title: product.nombre, price: product.precio, quantity: product.quantity })),
        total: totalPrice(),
    }

    const [dateBuyer, setDateBuyer] = useState(orden)

    const inputDate = (e) => {
        const { name, value } = e.target
        setDateBuyer({ ...dateBuyer, [name]: value })
    }

    const handleClick = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'pedidos')
        addDoc(orderCollection, dateBuyer)
            .then(({ id }) => setIdCompra(id))
        clearCart()
        setComprado(true)
    }



    // NO LOGRO ENVIAR LA ORDEN A FIREBASE, ME TOMA COMO QUE UN VALOR ESTA UNDEFINED


    if (cart.length <= 0) {
        return (
            <div className='posicionContent'>
                {
                    comprado ? <Comprador compra={dateBuyer} idCompra={idCompra} /> :
                        <div className='posicionContent cajaMessag'>
                            <h1>Carrito Vacío</h1>
                            <Link className='carritoReturn' to='/page/1'>Hacer compras</Link>
                        </div>
                }
            </div>
        )
    }

    return (
        <div className='d-flex flex-column align-items-center pt-2 vhcards'>



            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }


            <form className='formulario'>
                <h4 className='text-center'> Ingrese sus datos para terminar la compra</h4>
                <MDBRow className='mb-4'>
                    <MDBCol>
                        <MDBInput label='Nombre y Apellido' onChange={inputDate} value={dateBuyer.name} />
                    </MDBCol>
                </MDBRow>
                <MDBInput wrapperClass='mb-4' label='Dirección' onChange={inputDate} value={dateBuyer.direccion} />
                <MDBInput wrapperClass='mb-4' label='Ciudad' onChange={inputDate} value={dateBuyer.ciudad} />
                <MDBInput wrapperClass='mb-4' type='email' label='Email' onChange={inputDate} value={dateBuyer.email} />
                <MDBInput wrapperClass='mb-4' type='tel' label='Teléfono' onChange={inputDate} value={dateBuyer.cel} />

                <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Información adicional de contacto' onChange={inputDate} value={dateBuyer.info} />

                <MDBBtn className='mb-4 botonCompra' type='submit' block onClick={handleClick}>
                    Comprar
                </MDBBtn>
            </form>



            <div className='pagar'>
                <h1>Total: $ {totalPrice()}</h1>
                <button type='submit' className='pagarOVaciar' onClick={handleClick} >Terminar compra</button>
                <button className='pagarOVaciar' onClick={() => clearCart()}>vaciar</button>
            </div>

        </div>
    )
}

export default Cart
