import PageNav from '../Navbar/PageNav';
import ProductStyle from '../../styles/Products.module.css';
import ProductHeader from './ProductHeader';
import ProductBanner from './ProductBanner';
import Products from './Products';
import { useEffect, useState } from 'react'
import { LockInfo, IottyInfo } from "./data";

const Index = (props) => {
    const [locks, setLocks] = useState([]);
    const [switches, setSwitches] = useState([]);

    const getProductDetails = async () => {
        const res = await fetch(`/api/hello`);
        const response = await res.json();

        setLocks(response.products.filter(({product}) => product.type === "lock"));
        setSwitches(response.products.filter(({product}) => product.type === "switch"));
    };

    useEffect(() => {
        getProductDetails();
    },[])

    return (
        <section className="container my-3">
            <div className={ProductStyle.Container}>
                <PageNav pageName={"our products"} />
                <ProductHeader />
                <ProductBanner productBackgroundStyle={ProductStyle.LockImage} bkgColor={"#5C5C5C"} subText={"The Igloohome Smart Mortise 2+"} hasheader={false} />
                <Products products={locks} productHeader="Smart Locks" id="product" />
                <ProductBanner header={"Iotty Smart Switches."} bkgColor={"none"} productBackgroundStyle={ProductStyle.IottyImage} to="#iotty"
                    subText={"Voice activated light switch "} hasheader={true} />
                <Products products={switches} productHeader="Smart Switches" id="iotty" />

            </div>
        </section>
    )
}

export default Index;