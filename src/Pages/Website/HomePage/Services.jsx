import { Container } from "react-bootstrap";
import SpecialHeading from "../../../Components/SpecialHeading/SpecialHeading";
import { services } from "../../../Data/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
export default function Services({spikes}) {
  return (
    <div id="services" className={`py-5 position-relative ${spikes ? 'spikes' : ''}`}>
      <SpecialHeading title={'services'} />
      <Container>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3 col-12 mb-4 text-center">
              <FontAwesomeIcon icon={service.icon} className="text-dark" style={{ fontSize: '35px' }} />
              <h3 className="title fw-bold text-primary my-3" style={{ fontSize: '30px' }}>
                {service.title}
              </h3>
              <p className="description text-muted m-0">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
