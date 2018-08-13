import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black as purple, red } from '../../../colors';

const SelectWrapper = styled('div')({
  paddingLeft: 20,
  paddingRight: 20,
  border: `1px solid ${purple}`,
  borderRadius: 4,
  display: 'inline-block',
  boxSizing: 'border-box'
}, ({ fullWidth, hasError }) => {
  const styles = [];
  if (fullWidth) styles.push({ width: '100%' });
  if (hasError) styles.push({ borderColor: red });
  return styles;
});

SelectWrapper.propTypes = {
  fullWidth: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default SelectWrapper;
