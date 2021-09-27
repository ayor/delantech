import React from "react";
import Image from 'next/image';
import ServiceStyle from '../../styles/Services.module.css';
import { useEmblaCarousel } from 'embla-carousel/react'
import PageNav from '../Navbar/PageNav';


const Services = () => {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
    })

    return (
        <>
            <section className={"container my-5 " + ServiceStyle.Service}>
                <PageNav pageName={"our services"} />
                <div className="embla my-5" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide" style={{
                            backgroundImage: "linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5)), url(/img/cinema.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            <div className={"d-flex h-100 justify-content-between align-items-center text-light p-3 " + ServiceStyle.Slide1}>
                                <p className="">Enjoy an immersive experience bringing movies to life and allowing you enjoy them as well as their directors intended.</p>
                                <h1>Home Cinemas</h1>
                            </div>

                        </div>
                        <div className="embla__slide" style={{
                            backgroundImage: "url(/img/hotels.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            <div className={"d-flex h-100 justify-content-between align-items-center text-light p-3 " + ServiceStyle.Slide1}>
                                <p className="">Our Smart Home Solution put Delan technologies on the map as a market leader in Home Automation industry.</p>
                                <h1>Smart Homes & Hotels</h1>
                            </div>
                        </div>
                        <div className="embla__slide" style={{
                            backgroundImage: "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5)),url(/img/office.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            <div className={"d-flex h-100 justify-content-between align-items-center text-light p-3 " + ServiceStyle.Slide1}>
                                <p className="">Our Smart Office Solutions start with advanced conference room solutions and traverse the entire office</p>
                                <h1>Smart Offices</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Services;
