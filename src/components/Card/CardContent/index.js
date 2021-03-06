import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const CardContent = styled('div')({
  color: black,
  lineHeight: 1.4
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

CardContent.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(CardContent);
