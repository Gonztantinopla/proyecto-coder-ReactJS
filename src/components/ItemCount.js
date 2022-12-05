import React from 'react'
import { useState } from "react"
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';


function ItemCount({ stock, onAdd }) {
    const [count, setCount] = useState(1)
    const sumarCarrito = () => { setCount(count + 1) }
    const restarCarrito = () => { setCount(count - 1) }

    return (

        <div className='d-flex'>
            <MDBBtnGroup>
                <MDBBtn onClick={restarCarrito} disabled={count <= 0} color='light'>
                    -
                </MDBBtn>
                <MDBBtn disabled color='light'>
                    <p className='mb-0' >{count}</p>
                </MDBBtn>
                <MDBBtn onClick={sumarCarrito} disabled={count >= stock} color='light'>
                    +
                </MDBBtn>
                <MDBBtn onClick={() => onAdd(count)} color='light'>Agregar al carrito
                </MDBBtn>
            </MDBBtnGroup>
        </div >
    )
}

export default ItemCount