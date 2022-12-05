import React from 'react'
import ItemDetail from '../components/ItemDetail'
import { useEffect, useState } from 'react';
import { getProduct } from '../services/products';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', id)
        getDoc(queryDoc)
            .then(res => setProducto({ id: res.id, ...res.data() }))
    }, [id])

    return (
        <ItemDetail product={producto} />
    )
}


export default ItemDetailContainer

