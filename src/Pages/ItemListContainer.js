import React from 'react'
import { useEffect, useState } from 'react';
import { getProducts } from '../services/products';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {



    const [datos, setDatos] = useState([])
    const { id } = useParams();
    useEffect(() => {
        getProducts(id).then(data => {
            setDatos(data);
        })
    }, [id])


    return (
        <div className='vh-80' >
            <ItemList products={datos} />
        </div >

    )
}

export default ItemListContainer