
import Btn from "../../components/Btn/Btn";
import Product from '../../components/Products/Product/Product'
import { convert } from "../../middleware/convertToNGN";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import Slider from '../../components/Products/Slider/Slider';
import { useEmblaCarousel } from 'embla-carousel/react';
import { addToCart } from "../../store/cartSlice";
const Index = ({ product, others }) => {

    const [text, setText] = useState("");
    const dipatch = useDispatch();

    const [emblaRef] = useEmblaCarousel({
        loop: true,
    });


    const handleAddToCart = () => {
        dipatch(addToCart({ ...product }));
        setText("Added to cart")
    };
    const imgArray = product.images ? [product.imageUrl, ...product.images] : [product.imageUrl];
    const images = imgArray.map((_url, ind) => <Slider key={ind} imageUrl={_url} />)
    return (
        <div className="container ">
            <div className="row mt-5 p-3" >
                <div className="col-12 col-md-6 ">
                    <div className="text-center mt-4 mb-3">
                        <div className="embla " ref={emblaRef}>
                            <div className="embla__container">
                                {images}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 ">
                    <div className="mt-sm-3">
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
                    <div className="row">
                        <div className="col-12 ">
                            <small className="text-secondary d-block my-2 text-center"> Demo </small>
                            <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
                                <iframe className="embed-responsive-item mr-2" src={product.youtubeUrl} style={{ width: '80%', height: '300px' }} frameBorder="0" allowFullScreen></iframe>
                            </div>
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
        </div>
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