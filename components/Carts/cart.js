import Image from 'next/image';
import { convert } from '../../middleware/convertToNGN';
import styles from '../../styles/Carts.module.css';

const cart = ({ imageUrl, name, price, qty, deleteItem, increment, decrement, handleChange }) => (
    <div className="row">
        <div className={" col d-flex justify-content-between "+styles.CartItem}>
            <div className="product-detail text-center p-3 w-25 col-auto">
                <Image src={imageUrl} width="60" height="60" alt={name} />
                <small className="text-secondary d-block">{name}</small>
                <small className="text-secondary d-block">@{price}</small>
            </div>
            <div className="text-center p-1 w-50 my-auto">
                {/* <h6 className="text-secondary">Qty</h6> */}
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
            <div className="text-center w-25 my-auto">
              
                    <small>{convert(price * qty)}</small>

            </div>
            <div className={"text-center w-25 my-auto "+ styles.Delete}  onClick={deleteItem}>
                <i className="fas fa-times-circle text-muted"></i>
            </div>

        </div>
    </div>
);

export default cart;