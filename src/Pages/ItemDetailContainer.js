import React from 'react'
import ItemDetail from '../components/ItemDetail'
import { useEffect, useState } from 'react';
import { getProduct } from '../services/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams()

    const [datos, setDatos] = useState([])
    useEffect(() => {
        getProduct(id).then(data => {
            setDatos(data);

        })

    }, [])
    return (
        <div>
            <ItemDetail detalleItem={datos} />
        </div>
    )
}


// products.find((prod) => prod.id === id
// products.filter((prod) => prod.categoria === category(asi filtre yo por categoria)

export default ItemDetailContainer