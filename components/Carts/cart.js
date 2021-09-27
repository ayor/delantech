import Image from 'next/image';

const cart = ({ imageUrl, name, price }) => (
    <div className="row">
        <div className="col-md-7">
            <div className="product-detail">
                <Image src={imageUrl} width="60" height="60" alt={name} />
                <p className="small">{name}</p>
                <p className="small">{price}</p>
            </div>
        </div>
    </div>
);

export default cart;