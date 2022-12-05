import { useCartContext } from '../context/CartContext';


const CartWidget = () => {
    const { totalProductos } = useCartContext();


    return (
        <div className='d-flex align-items-center'><span className='contador'>{totalProductos() || ''} </span>
            <img className='d-flex' alt='Carrito' src={require('../assets/img/bag.png')} />
        </div>
    )
}

export default CartWidget;