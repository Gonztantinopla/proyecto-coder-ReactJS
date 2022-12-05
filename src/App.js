import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './app/Router';
import CartProvider from './context/CartContext';

const App = () =>
    <CartProvider>
        <Router />
    </CartProvider>

export default App;
