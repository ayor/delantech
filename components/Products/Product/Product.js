import Btn from '../../Btn/Btn';
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';
import { useState } from 'react';
import Loading from '../../Loading/Loader';

const Product = props => {
    const dipatch = useDispatch(); 

    return (
        // props.imageUrl === null ? <Loading /> : 
        <div className="col col-md-6 col-lg-3 mb-4 text-center">
            <Image className="img-fluid rounded" src={props.imageUrl} width="150" height="150" alt={props.name}/>
            <small className="text-secondary my-2 d-block font-weight-bolder">{props.name}</small>
            <Btn title={props.price} iconName={"shopping-cart"} clicked={() => dipatch(addToCart({id : props.id, }))} />
        </div>
    )
};
export default Product;