import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { red } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const ErrorText = styled('label')({
  marginTop: 4,
  color: red,
  display: 'block'
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize * .9
}));

ErrorText.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(ErrorText);
