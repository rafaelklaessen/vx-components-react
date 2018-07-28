import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../ThemeContext/withTheme';

const EnormousTitle = styled(`h1`)({
  margin: 0,
  lineHeight: 1,
  textAlign: 'center',
  textTransform: 'uppercase',
  opacity: .9
}, ({ small, theme }) => ({
  color: theme.primaryColor,
  fontFamily: theme.titleFontFamily,
  fontSize: small ? 64 : 128,
  letterSpacing: small ? 10 : 20
}));

EnormousTitle.propTypes = {
  small: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

EnormousTitle.defaultProps = {
  small: false
};

export default withTheme(EnormousTitle);
