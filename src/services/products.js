import products from '..//assets/data/products.json'
// import { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
import { MDBBtn } from 'mdb-react-ui-kit';


export const getProducts = (id) => {
    const task = new Promise((resolve) => {
        setTimeout(() => {
            resolve(id ? products.filter(prod => prod.categoria === id)
                : products);

        }, 1000);

    })
    return task
}


export const getProduct = (id) => {
    const task = new Promise((resolve) => {

        resolve(products.find(prod => prod.id === Number(id)));

    })
    return task
}


