import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ultraDarkGrey } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const InputLabel = styled('label')({
  marginBottom: 10,
  color: ultraDarkGrey,
  display: 'block'
}, ({ disabled, theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize * .9,
  cursor: disabled ? 'not-allowed' : 'pointer'
}));

InputLabel.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

InputLabel.defaultProps = {
  disabled: false
};

export default withTheme(InputLabel);
