import React from 'react'
import { useEffect, useState } from 'react';
import { getProducts } from '../services/products';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    // const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        // setLoading(true)
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos')

        if (id) {
            const queryFilter = query(queryCollection, where('categoria', '==', id))
            getDocs(queryFilter)
                .then(res => setDatos(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setDatos(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        }
        // setLoading(false)
    }, [id])

    return (
        <div className='vh-80' >
            <ItemList products={datos} />
        </div >

    )
}

export default ItemListContainer




    // ItemListContainer = () => {



    //     const [datos, setDatos] = useState([])
    //     const { id } = useParams();
    //     useEffect(() => {
    //         getProducts(id).then(data => {
    //             setDatos(data);
    //         })
    //     }, [id])

