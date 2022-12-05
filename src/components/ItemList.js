// import React from 'react'

import Item from "./Item"
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

function ItemList({ products }) {
    return (
        <div>
            <MDBContainer >
                <MDBRow >
                    {products.map((producto,) => <Item key={producto.id} productoItem={producto} />)}
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default ItemList