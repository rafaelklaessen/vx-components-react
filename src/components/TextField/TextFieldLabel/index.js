import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ultraDarkGrey } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const TextFieldLabel = styled('label')({
  marginBottom: 10,
  color: ultraDarkGrey,
  display: 'block'
}, ({ disabled, theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize * .9,
  cursor: disabled ? 'not-allowed' : 'pointer'
}));

TextFieldLabel.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

TextFieldLabel.defaultProps = {
  disabled: false
};

export default withTheme(TextFieldLabel);
