

const Service = ({ src, title }) => (
    <>
        <small className="d-block">{title}</small>
        <iframe src={src} title={title}> </iframe>
    </>
);

export default Service;