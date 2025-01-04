import { faArrowsToCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SpecialHeading from '../../../Components/SpecialHeading/SpecialHeading';
import { products } from '../../../Data/products';
import { useState } from 'react';

export default function Products() {
  const [productList, setProductList] = useState(products);

  const handleFiltering = (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach((button) => {
      button.classList.remove('btn-primary');
      button.classList.add('btn-outline-primary');
    });
    e.target.classList.add('btn-primary');
    e.target.classList.remove('btn-outline-primary');

    const filter = e.target.innerHTML.toLowerCase();
    const filteredProducts =
      filter === 'all' ? products : products.filter((product) => product.brand.toLowerCase() === filter);
    setProductList(filteredProducts);
  };
  return (
    <div id="products" className="py-5">
      <SpecialHeading title={'products'} />
      <Container>
        <h2 className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
          <FontAwesomeIcon icon={faArrowsToCircle} className="fs-4 text-primary" /> Latest Products
        </h2>
        <div className="filters mb-4 text-center text-md-start" onClick={handleFiltering}>
          <button className="btn btn-primary  m-1">All</button>
          <button className="btn btn-outline-primary m-1">Samsung</button>
          <button className="btn btn-outline-primary m-1">Apple</button>
          <button className="btn btn-outline-primary m-1">Xiaomi</button>
          <button className="btn btn-outline-primary m-1">Oppo</button>
          <button className="btn btn-outline-primary m-1">Realme</button>
        </div>
        <div className="row">
          {productList.map((product, index) => (
            <Link
              key={index}
              className="col-md-6 col-lg-3 col-12 mb-4 text-center text-decoration-none"
              to={`/products/${product.id}`}
            >
              <div className="product card rounded-4 p-3 h-100 d-flex flex-column justify-content-between align-items-center">
                <div className="image" style={{ width: '200px', height: '200px' }}>
                  <img src={product.image} alt={product.name} className="img-fluid product-image" />
                </div>
                <h3 className="name text-dark my-3" style={{ fontSize: '24px' }}>
                  {product.name}
                </h3>
                <p className="price text-primary fs-5 fw-bold m-0">{product.price} L.E</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
