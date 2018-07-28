import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../ThemeContext/withTheme';

const BigTitle = styled('h1')({
  margin: 0,
  display: 'block'
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize * 3
}));

BigTitle.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(BigTitle);
