import { Form, Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';
import { MDBBadge, MDBListGroup, MDBListGroupItem, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CardCliente from './CardCliente';
import SadCart from './SadCart';
import ItemListContainer from '../Pages/ItemListContainer'
import Compra from './Compra'
import Date from './Date'



function Cart() {
    const { cart, precioTotal, cleanCart } = useCartContext();
    const [sell, setSell] = useState(false)

    const order = {
        items: cart.map(productoItem => ({ id: productoItem.id, nombre: productoItem.name, precio: productoItem.precio, cantidad: productoItem.cantidad })),
        total: precioTotal(),
    }


    const [comprador, setComprador] = useState(order);

    const inputCapture = (e) => {
        const { name, value } = e.target
        setComprador({ ...comprador, [name]: value, date: new Date() })

    }

    const handleClick = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id));
        cleanCart();
        setSell(true)
    }



    if (cart.length <= 0) {

        return (
            <>
                {
                    sell ? <Compra comprador={comprador} /> :
                        <ItemListContainer />
                }
                <div className='center2'>
                    <p>Carrito Vacio</p>
                    <Link to='/'>Seguir comprando</Link>
                </div>
            </>
        );
    }
    // return (
    //     <>
    //         <div className='vhcards d-flex flex-column align-items-center pt-2'>
    //             {
    //                 sell ? <Compra comprador={comprador} /> : <SadCart />
    //             }

    //             <p> No hay elementos en el carrito <Link to={"/proyectofinal"}> ir a la pagina principal </Link></p>
    //         </div>

    //     </>
    // );


    //     return (
    //         <div className='d-flex flex-column align-items-center pt-2 vhcards'>
    //             <MDBListGroup className='d-flex justify-content-center' style={{ minWidth: '22rem' }} light>
    //                 {
    //                     cart.map(productoItem => <ItemCart key={productoItem.id} productoItem={productoItem} cantidad={productoItem.cantidad} />)
    //                 }
    //             </MDBListGroup>
    //             <h3 className='d-flex justify-content-center'> Total de esta compra: ${precioTotal()}</h3>



    //             <div className='formulario'>
    //                 <form>
    //                     <label>Nombre</label>
    //                     <input name='Nombre' placeholder='Nombre y apellido' onChange={inputCapture} value={comprador.name} />
    //                     <label>Email</label>
    //                     <input type='email' name='email' placeholder='Email' onChange={inputCapture} value={comprador.email} />
    //                     <label>Dirección</label>
    //                     <input type='text' name='dirección' placeholder='Dirección' onChange={inputCapture} value={comprador.addres} />
    //                     <label>Teléfono</label>
    //                     <input type='tel' name='Teléfono' placeholder='Teléfono' onChange={inputCapture} value={comprador.phone} />
    //                     <button type='submit' value='Submit' className='compra' onClick={handleClick} >Confirmar Compra</button>
    //                 </form>
    //                 <h3 className='center2'> Total: $ {precioTotal()}</h3>
    //             </div>

    //             {/* <form className='formulario'>
    //                 <h4 className='text-center'> Ingrese sus datos para terminar la compra</h4>
    //                 <MDBRow className='mb-4'>
    //                     <MDBCol>
    //                         <MDBInput label='Nombre y Apellido' onChange={inputCapture} value={comprador.Nombre} />
    //                     </MDBCol>
    //                 </MDBRow>
    //                 <MDBInput wrapperClass='mb-4' label='Dirección' onChange={inputCapture} value={comprador.dirección} />
    //                 <MDBInput wrapperClass='mb-4' type='email' label='Email' onChange={inputCapture} value={comprador.email} />
    //                 <MDBInput wrapperClass='mb-4' type='tel' label='Teléfono' onChange={inputCapture} value={comprador.Teléfono} />

    //                 <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Información adicional de contacto' onChange={inputCapture} value={comprador.info} />

    //                 <MDBBtn className='mb-4 botonCompra' type='submit' block onClick={finCompra}>
    //                     Comprar
    //                 </MDBBtn>
    //             </form> */}
    //         </div>
    //     )
    // }


    return (
        <>

            {
                cart.map(productoItem => <ItemCart key={productoItem.id} productoItem={productoItem} cantidad={productoItem.cantidad} />)
            }

            <div className='center2'><Link to='/'>Seguir Comprando</Link></div>
            <h2 className='center2'> Total: $ {precioTotal()}</h2>
            <h3> Ingrese sus datos para el envio</h3>
            <div className='formulario'>
                <form>
                    <label>Nombre</label>
                    <input name='Nombre' placeholder='Nombre y apellido' onChange={inputCapture} value={comprador.name} />
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Email' onChange={inputCapture} value={comprador.email} />
                    <label>Dirección</label>
                    <input type='text' name='dirección' placeholder='Dirección' onChange={inputCapture} value={comprador.addres} />
                    <label>Teléfono</label>
                    <input type='tel' name='Teléfono' placeholder='Teléfono' onChange={inputCapture} value={comprador.phone} />
                    <button type='submit' value='Submit' className='compra' onClick={handleClick} >Confirmar Compra</button>
                </form>
                <h3 className='center2'> Total: $ {precioTotal()}</h3>
            </div>
        </>
    )
}

export default Cart