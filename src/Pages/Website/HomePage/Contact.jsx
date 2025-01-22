import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <div id="contact" className="py-5" style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
      <Container className="d-flex flex-column flex-md-row justify-content-md-between align-items-center gap-3 text-center text-md-start">
        <div className="text-content">
          <h2 className="title fw-bold">Contact Us</h2>
          <p className="address text-muted">
            <strong>Author:</strong> Mahmoud Maher Alfeshawy
          </p>
          <p className="address text-muted">
            <strong>Address:</strong> 3 Alfeshawy Street - Sirs Allayan, Menofia, Egypt
          </p>
          <p className="phone text-muted">
            <strong>Phone:</strong> +201093931501
          </p>
          <p className="email text-muted">
            <strong>Email:</strong>{' '}
            <a href="mailto:mahmoudmaherofficial@gmail.com" className="text-decoration-none">
              mahmoudmaherofficial@gmail.com
            </a>
          </p>
        </div>
        <div className="map">
          <iframe
            title="Cell Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.319527551796!2d31.235227315479917!3d30.044419981878085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838a3b5c6d3a9%3A0x7f4f7b1c4c1f3b8e!2s12%20Main%20St%2C%20El%20Zamalek%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1634394745482!5m2!1sen!2sus"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}
