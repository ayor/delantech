import Cart from './cart';
import { useDispatch, useSelector } from 'react-redux'
const Carts = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.value);

    return (<div>
        {cart.length === 0 ? (<small>There are currently no items in your cart</small>) : cart.map(item => (<Cart key={item.id}  />))}
    </div>)
};

export default Carts;