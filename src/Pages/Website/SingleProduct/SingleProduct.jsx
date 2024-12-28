import { Container } from 'react-bootstrap';
import { products } from '../../../Data/products';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const { id: pId } = useParams();
  useEffect(() => {
    const currentProduct = products.find((product) => product.id === parseInt(pId));
    setProduct(currentProduct);
  }, [pId]);
  return (
    <div id="single-product">
      <Container>
        <div className="row py-5">
          <div className="col-md-6 col-12 text-center">
            <img src={product.image} alt={product.name} className="img-fluid h-100" />
          </div>
          <div className="col-md-6 col-12">
            <h2 className="text-primary">{product.name}</h2>
            <p className="text-muted">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="lead">
              <strong>Price:</strong> {product.price}
            </p>
            <p className="text-muted">{product.description}</p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
