import React from "react";
import ServiceStyle from '../../styles/Services.module.css';
import PageNav from '../Navbar/PageNav';
import  Banner from './Banner/Bannner';

const Services = () => {
    return (
        <>
            <section className={"container my-5 " + ServiceStyle.Service}>
                <PageNav pageName={"our services"} />
                <Banner/>
           </section>
        </>
    )
};

export default Services;
