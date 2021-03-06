import Product from './Product/Product';

const Products = ({ products, productHeader, id }) => {
  const product = products.map(({ id, product }) => (
    <Product
      key={id}
      name={product.name}
      id={id}
      images={product.images}
      alt={product.name}
      price={product.price}
    />
  ));

  return (
    <div className="row justify-content-center my-5" id={id}>
      <small className="d-block mb-4 text-center  text-muted">
        {productHeader}
      </small>
      {product}
    </div>
  );
};

export default Products;
