import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../../ThemeContext/withTheme';

const CardTitle = styled('h3')({
  marginTop: 0,
  marginBottom: 12
}, ({ theme }) => ({
  color: theme.primaryColor,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize * 1.1
}));

CardTitle.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(CardTitle);
