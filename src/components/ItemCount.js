import React from 'react'
import { useState } from "react"


function ItemCount({ stock }) {
    const [count, setCount] = useState(0)
    const sumarCarrito = () => { setCount(count + 1) }
    const restarCarrito = () => { setCount(count - 1) }

    return (
        <div >
            <span>stock disponible:{stock}</span>
            <div className='d-flex'>
                <button onClick={restarCarrito} disabled={count <= 0}>-</button>
                <p>{count}</p>
                <button onClick={sumarCarrito} disabled={count >= stock}>+</button>
            </div>
        </div>
    )
}

export default ItemCount