import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ultraDarkGrey } from '../../colors';
import { transition } from '../../styles';
import withTheme from '../ThemeContext/withTheme';

const Label = styled('label')({
  order: 2,
  color: ultraDarkGrey,
  transition
}, ({ disabled, left, theme }) => ({
  order: left ? 0 : 2,
  marginLeft: left ? 0 : theme.fontSize / 2,
  marginRight: left ? theme.fontSize / 2 : 0,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  opacity: disabled ? .5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer'
}));

Label.propTypes = {
  disabled: PropTypes.bool,
  left: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Label.defaultProps = {
  disabled: false,
  left: false
};

export default withTheme(Label);
