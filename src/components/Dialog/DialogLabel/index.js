import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { darkGrey } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const DialogLabel = styled('h4')({
  marginTop: 0,
  marginBottom: 4,
  lineHeight: '24px',
  color: darkGrey,
  textTransform: 'uppercase'
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize * .7
}));

DialogLabel.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(DialogLabel);
