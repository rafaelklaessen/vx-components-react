import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black, ultraDarkGrey } from '../../../../colors';
import { transition } from '../../../../styles';

const LabelTitle = styled('h5')({
  marginTop: 24,
  marginBottom: 22,
  lineHeight: 1,
  fontSize: 14,
  fontWeight: 900,
  textTransform: 'uppercase',
  transition
}, ({ active }) => ({
  color: active ? black : ultraDarkGrey
}));

LabelTitle.propTypes = {
  active: PropTypes.bool.isRequired
};

export default LabelTitle;
