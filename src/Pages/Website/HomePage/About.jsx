import { Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png';

export default function About() {
  return (
    <div id="about" className="py-5 spikes position-relative">
      <Container className="d-flex flex-column flex-md-row gap-5 text-center text-md-start">
        <div className="image">
          <img src={logo} alt="Cell Store Logo" />
        </div>
        <div className="text-content ms-md-5 me-md-5">
          <h2 className="title fw-bold">About Us</h2>
          <p className="description text-muted">
            Cell Store is a local phone shop offering the latest smartphones, accessories, and fast repair services. ith
            friendly staff and great prices, it&apos;s your one-stop shop for all things mobile.
          </p>
        </div>
      </Container>
    </div>
  );
}
