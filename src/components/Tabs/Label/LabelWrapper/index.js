import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { lightGrey } from '../../../../colors';
import { transition } from '../../../../styles';

const LabelWrapper = styled('div')({
  flex: 1,
  textAlign: 'center',
  cursor: 'pointer',
  transition
}, ({ active }) => {
  if (active) return { backgroundColor: lightGrey };
});

LabelWrapper.propTypes = {
  active: PropTypes.bool
};

LabelWrapper.defaultProps = {
  active: false
};

export default LabelWrapper;
