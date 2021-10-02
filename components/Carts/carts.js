import Cart from './cart';
import Link from 'next/link';
import OrderForm from './OrderForm';
import styles from '../../styles/Carts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, deleteCartItem, updateQty } from '../../store/cartSlice';
import { useEffect } from 'react';

const Carts = () => {
    const dispatch = useDispatch();
    const { value, totalPrice } = useSelector((state) => state.cart);

    const cartsView = value.length === 0 ? (<small>There are currently no items in your cart..</small>) : value.map(item => (
        <Cart
            key={item.id} imageUrl={item.imageUrl} qty={item.qty} increment={() => dispatch(increment(item.id))} handleChange={(ev) => dispatch(updateQty({ id: item.id, qty: ev.target.value }))}
            deleteItem={() => dispatch(deleteCartItem(item.id))} decrement={() => dispatch(decrement(item.id))}
            name={item.name} price={item.price} />))

    return (<section className="container my-5">
        <div className="row pt-4 px-4 mt-5">
            <div className="col">
                <div className="">
                    <h2 className={styles.H1}>Cart Items</h2>
                    <Link href="/#product" passHref>
                        <a className="text-muted d-block"><u>continue shopping</u></a>
                    </Link>
                </div>
            </div>
        </div>
        <hr />
        <div className="row" style={{
            height: "400px",
            overflowY: "scroll"
        }}>
            <div className="col-md-12 col-lg-7">
                {cartsView}
            </div>
            <div className="col-md-12 col-lg-5">
                    <OrderForm totalPrice={totalPrice} />
            </div>
        </div>
    </section>)
};

export default Carts;