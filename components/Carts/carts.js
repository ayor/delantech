import Cart from './cart';
import Link from 'next/link';
import OrderForm from './OrderForm';
import styles from '../../styles/Carts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  deleteCartItem,
  updateQty,
} from '../../store/cartSlice';
import { Alert } from '@mui/material';
import { useEffect } from 'react';

const Carts = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state);

  const cartsView =
    items.length > 0 ? (
      items.map((item) => (
        <Cart
          key={item.id}
          id={item.id}
          imageUrl={item.images[0]}
          qty={item.qty}
          increment={() => dispatch(increment(item.id))}
          handleChange={(ev) =>
            dispatch(updateQty({ id: item.id, qty: ev.target.value }))
          }
          deleteItem={() => dispatch(deleteCartItem(item.id))}
          decrement={() => dispatch(decrement(item.id))}
          name={item.name}
          price={item.price}
        />
      ))
    ) : (
      <Alert severity="warning">
        There are currently no items in your cart..
        <Link href="/#products">
          <a className="text-dark"> Take me shopping</a>
        </Link>
      </Alert>
    );

  return (
    <section className="container my-5">
      <div className="row pt-4 px-4 mt-5">
        <div className="col">
          <div className="">
            <h2 className={styles.H1}>Cart Items</h2>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="row"
        style={{
          height: '400px',
          overflowY: 'scroll',
        }}
      >
        <div className="col-md-12 col-lg-7">{cartsView}</div>
        <div className="col-md-12 col-lg-5">
          <OrderForm totalPrice={totalPrice} />
        </div>
      </div>
    </section>
  );
};

export default Carts;
