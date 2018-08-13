import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { darkGrey } from '../../../../colors';

const OptionWrapper = styled('div')({
  borderTop: `1px solid ${darkGrey}`,
  display: 'none'
}, ({ open }) => {
  if (open) return { display: 'block' };
});

OptionWrapper.propTypes = {
  open: PropTypes.bool.isRequired
};

export default OptionWrapper;
