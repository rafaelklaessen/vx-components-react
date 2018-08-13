import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { transition } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

export const getOptionKey = id => `__option__-${id}`;

const Option = styled('div')({
  marginBottom: 6,
  cursor: 'pointer',
  transition,
  ':first-child': {
    marginTop: 12
  },
  ':last-child': {
    marginBottom: 12
  }
}, ({ selected, theme }) => {
  if (selected) return {
    color: theme.primaryColor
  };
})

Option.propTypes = {
  selected: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Option.defaultProps = {
  selected: false
};

export default withTheme(Option);
