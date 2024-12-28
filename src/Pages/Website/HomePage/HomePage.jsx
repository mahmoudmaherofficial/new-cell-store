import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Services from './Services';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import './HomePage.css';

export default function HomePage() {
  return (
    <main id="home-page">
      <div id="landing">
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-content text-center rounded p-md-5 p-0 border border-3 border-white text-white">
            <h1 className="text-uppercase mb-2">Welcome to Cell store</h1>
            <p className="lead m-0">The best destination, Here you can find what you need</p>
          </div>
        </Container>
      </div>
      <Services />
      <Products />
      <About />
      <Contact />
    </main>
  );
}
