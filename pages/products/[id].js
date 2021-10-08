
import Btn from "../../components/Btn/Btn";
import Product from '../../components/Products/Product/Product'
import { convert } from "../../middleware/convertToNGN";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';
import Slider from '../../components/Products/Slider/Slider';
import ReactCarousel from 'react-material-ui-carousel';
import { addToCart } from "../../store/cartSlice";
const Index = ({ product, others }) => {

    const [text, setText] = useState("");
    const [isPhoneWidth, setPhoneWidth] = useState(false);
    const dipatch = useDispatch();

    useEffect(() => {
        if (window.screen["width"] <= 565) {
            setPhoneWidth(true);
        }
    }, [setPhoneWidth])

    const handleAddToCart = () => {
        dipatch(addToCart({ ...product }));
        setText("Added to cart")
    };
    const images = [product.imageUrl, product.imageUrl_1, product.imageUrl_2, product.imageUrl_3];

    let sliders = (
        <ReactCarousel swipe animation="slide" stopAutoPlayOnHover>
            {images.map((image, ind) =><div className="mb-5 rounded" key={ind} style={{ height: "500px" }}  >
                <div className="" style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center",
                    height: '100%',
                }}>

                </div>
                {/* })} */}
            </div>)}
        </ReactCarousel >
    )

    if (!isPhoneWidth) {
        sliders = (
            <div className="row  mb-5" style={{ height: "500px" }}>
                <div className="col-12 col-md-4 m-1 " style={{
                    backgroundImage: `url(${product.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center",
                    height: '100%',
                }}>

                </div>
                <div className="col-12 m-1 col-md-7 ">
                    <div className="row  mb-2" style={{ height: "250px" }}>
                        <div className="col-6 " style={{
                            backgroundImage: `url(${product.imageUrl_1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: "center",
                            height: '100%',
                        }}>

                        </div>
                        <div className="col-6 " style={{
                            backgroundImage: `url(${product.imageUrl_2})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: "center",
                            height: '100%',
                        }}>

                        </div>
                    </div>
                    <div className="row " style={{ height: "250px" }}>
                        <div className="col-6 " style={{
                            backgroundImage: `url(${product.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: "center",
                            height: '100%',
                        }}>

                        </div>
                        <div className="col-6 " style={{
                            backgroundImage: `url(${product.imageUrl_3})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: "center",
                            height: '100%',
                        }}>

                        </div>
                    </div>
                </div>
            </div>)

    }
    return (
        <div className="container ">
            <div className="row mt-5 p-3" >
                <div className="col-12 ">
                    <div className="text-center mt-4 mb-3">
                        {sliders}
                    </div>
                    <div className="row my-3">
                        <div className="col-12 col-md-6 ">
                            <div className="my-3">
                                <h4 className="text-dark h4 text-center d-block my-2 ">{product.name}</h4>
                                <div className="details mb-3">
                                    <small className="text-secondary d-block">{product.description}</small>
                                    <div className="pricing text-center mt-3">
                                        <small className=" my-2 text-muted"> Buy Now @</small>
                                        <small className=" my-2 text_delanBlue"> {convert(product.price)}</small>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Btn title={"Add To Cart"} iconName={"plus-circle"} altTitle={text} clicked={handleAddToCart} />
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
                                <iframe className="embed-responsive-item mr-2" src={product.youtubeUrl} style={{ width: '100%', height: '300px' }} frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="similar_projects row justify-content-center">
                    <small className="text-dark text-center d-block mb-2 ">Similar Products</small>
                    {others.map(item => (<Product key={item.id} name={item.name} id={item.id}
                        imageUrl={item.imageUrl} alt={item.name} price={item.price} />
                    ))}
                </div>
            </div >
        </div >

    )

}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://delantech.netlify.app/api/product`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: params["id"] })
    })
    const data = await res.json()

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            ...data
        }, // will be passed to the page component as props
    }
}

export default Index;