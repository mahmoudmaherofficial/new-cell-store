import './SpecialHeading.css';
import PropTypes from 'prop-types';

export default function SpecialHeading(props) {
  const { title } = props;
  return <h2 className="special-heading fw-bold text-primary">{title}</h2>;
}

SpecialHeading.propTypes = {
  title: PropTypes.string,
};
