// import { useEmblaCarousel } from 'embla-carousel/react'
import ServiceStyle from '../../../styles/Services.module.css';
import ReactCarousel from 'react-material-ui-carousel';

const items = [
    {
        description: "Enjoy an immersive experience bringing movies to life and allowing you enjoy them as well as their directors intended.",
        header: "Home Cinemas",
        bkgImg: "/img/cinema.jpg"
    },
    {
        description: "Our Smart Home Solution put Delan technologies on the map as a market leader in Home Automation industry.",
        header: "Smart Homes",
        bkgImg: "/img/hotels.jpg"
    },
]
const Banner = () => {

    const sliders = items.map((item, ind) => (
        <div className="__container rounded my-2" key={ind}>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5)), url(${item.bkgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%"
            }}>
                <div className={"d-flex h-100 justify-content-between align-items-center text-light p-3 " + ServiceStyle.Slide1}>
                    <p className={ServiceStyle.SlideText}>{item.description}</p>
                    <h1 className={ServiceStyle.H1}>{item.header}</h1>
                </div>

            </div>
        </div>))
    return (
        <ReactCarousel animation="slide" stopAutoPlayOnHover swipe >
            {sliders}
        </ReactCarousel>
    )
}

export default Banner;



