import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ultraDarkGrey } from '../../colors';
import { transition } from '../../styles';
import withTheme from '../ThemeContext/withTheme';

const Label = styled('label')({
  color: ultraDarkGrey,
  transition
}, ({ disabled, theme }) => ({
  marginLeft: theme.fontSize / 2,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  opacity: disabled ? .5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer'
}));

Label.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Label.defaultProps = {
  disabled: false
};

export default withTheme(Label);
