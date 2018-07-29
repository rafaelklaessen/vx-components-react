import PropTypes from 'prop-types';
import styled from 'react-emotion';

const generateGradient = (name, startColor, stopColor) => {
  const Gradient = styled('div')({
    width: '100%',
    height: '100%'
  }, ({ vertical }) => ({
    background: `linear-gradient(${
      vertical ? 'to bottom' : 'to left'
    }, ${startColor}, ${stopColor})`
  }));

  Gradient.displayName = `Gradients.${name}`;

  Gradient.propTypes = {
    vertical: PropTypes.bool
  };

  Gradient.defaultProps = {
    vertical: false
  };

  return Gradient;
};

export default generateGradient;
