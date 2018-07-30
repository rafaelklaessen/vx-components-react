import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black } from '../../../../colors';
import { transition } from '../../../../styles';

const LabelBar = styled('div')({
  height: 2,
  backgroundColor: black,
  transition
}, ({ hidden }) => {
  if (hidden) return { opacity: 0 };
});

LabelBar.propTypes = {
  hidden: PropTypes.bool.isRequired
};

export default LabelBar;
