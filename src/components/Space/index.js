import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Space = styled('div')(({ height }) => ({ marginBottom: height }));

Space.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Space;
