const Slider = ({ imageUrl }) => {
    return (
        <div className="embla__slide" style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "contain",
            backgroundRepeat:'no-repeat',
            backgroundPosition: "center",
            height: 'auto'
        }}>
           
        </div>
    )
}

export default Slider;