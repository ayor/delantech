import Image from 'next/image';
import { convert } from '../../convertToNGN';
import styles from '../../styles/Carts.module.css';

const cart = ({ imageUrl, name, price, qty, deleteItem, increment, decrement, handleChange }) => (
    <div className="row">
        <div className=" col d-flex justify-content-between ">
            <div className="product-detail text-center m-3 col-auto">
                <Image src={imageUrl} width="60" height="60" alt={name} />
                <small className="text-secondary d-block">{name}</small>
                <small className="text-secondary d-block">{convert(price)}</small>
            </div>
            <div className="text-center my-auto">
                <h6 className="text-secondary">Qty</h6>
                <div className="input-group">
                    <button className="btn btn-outline-danger input-group-prepend" onClick={decrement}>
                        -
                    </button>

                    <input type="number" className={"form-control  d-inline " + styles.CartInput} value={qty} onChange={handleChange} />
                    <button className="btn btn-dark input-group-append" onClick={increment}>
                        +
                    </button>

                </div>
            </div>
            <div className="text-center my-auto">
                <h6 className="text-secondary">Price</h6>
                <div className="">
                    <p>{convert(price * qty)}</p>

                </div>
            </div>
            <div className={"text-center my-auto "+ styles.Delete}  onClick={deleteItem}>
                <i className="fas fa-times-circle text-muted"></i>
            </div>

        </div>
    </div>
);

export default cart;