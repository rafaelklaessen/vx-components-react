import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ultraDarkGrey } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const RadioLabel = styled('label')({
  marginLeft: 8,
  color: ultraDarkGrey
}, ({ disabled, theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  opacity: disabled ? .5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer'
}));

RadioLabel.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

RadioLabel.defaultProps = {
  disabled: false
};

export default withTheme(RadioLabel);
