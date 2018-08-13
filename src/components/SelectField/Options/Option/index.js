import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Option = styled('div')({
  marginBottom: 6,
  cursor: 'pointer',
  ':first-child': {
    marginTop: 12
  },
  ':last-child': {
    marginBottom: 12
  }
}, ({ selected }) => {
  if (selected) return { fontWeight: 700 };
})

Option.propTypes = {
  selected: PropTypes.bool.isRequired
};

export default Option;
