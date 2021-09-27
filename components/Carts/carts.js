import Cart from './cart';

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
const Carts = ({nav}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.value);

    useEffect(()=>{
        cart.forEach(item => {
            
        });
    })

    return (<div>
  
        {cart.length === 0 ? (<small>There are currently no items in your cart</small>) : cart.map(item => (<Cart key={item.id} />))}
    </div>)
};

export default Carts;