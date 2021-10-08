import Btn from '../../Btn/Btn';
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';
import { convert } from '../../../middleware/convertToNGN';
import Loading from '../../Loading/Loader';
import { useState } from 'react';
import Link from 'next/link';

const Product = props => {
    const [text, setText] = useState("");
    const dipatch = useDispatch();
    const price = convert(props.price);

    const handleAddToCart = () => {
        dipatch(addToCart({ ...props }));
        setText("Added to cart")
    }

    return (
        props.imageUrl === null ? <Loading /> :
            (<div className="col col-md-6 col-lg-3 mb-4 text-center">
                <Link href={'/products/'+props.id} passHref>
                    <a>
                    <Image className="img-fluid rounded" src={props.imageUrl} width="150" height="150" alt={props.name} />
                    </a>
                </Link>
                    <small className="text-secondary d-block font-weight-bolder">{props.name}</small>
                    <small className="text-muted mb-2 d-block font-weight-bolder">@{price}</small>
                    <Btn title={"Add To Cart"} iconName={"plus-circle"} clicked={handleAddToCart} altTitle={text} />
            </div>)
    )
};
export default Product;