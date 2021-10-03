import { useEmblaCarousel } from 'embla-carousel/react';
import ServiceStyle from '../../../styles/Services.module.css';

const Banner = () => {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
    })

    return(
        <>
             <div className="embla my-5" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide" style={{
                            backgroundImage: "linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5)), url(/img/cinema.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            <div className={"d-flex h-100 justify-content-between align-items-center text-light p-3 " + ServiceStyle.Slide1}>
                                <p className={ServiceStyle.SlideText}>Enjoy an immersive experience bringing movies to life and allowing you enjoy them as well as their directors intended.</p>
                                <h1 className={ServiceStyle.H1}>Home Cinemas</h1>
                            </div>

                        </div>
                        <div className="embla__slide" style={{
                            backgroundImage: "url(/img/hotels.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            <div className={"d-flex h-100 justify-content-between align-items-center text-light p-3 " + ServiceStyle.Slide1}>
                                <p className={ServiceStyle.SlideText}>Our Smart Home Solution put Delan technologies on the map as a market leader in Home Automation industry.</p>
                                <h1 className={ServiceStyle.H1}>Smart Homes & Hotels</h1>
                            </div>
                        </div>

                    </div>
                </div>
            
        </>
    )
}

export default Banner;