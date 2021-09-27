import Underline from './Underline';
import ProductStyle from '../../styles/Products.module.css';

const ProductHeader = () => {
    return (
        <section className="container my-5">
            <div className={ProductStyle.Container}>
                <div className="mt-3 text-center" >
                    <h3 className=""> Simple IOT devices to make your houses smarter </h3>
                    <Underline />
                </div>
            </div>
        </section>
    )
}

export default ProductHeader;