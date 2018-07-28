import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../../ThemeContext/withTheme';

const CardContent = styled('div')({
  lineHeight: 1.8
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

CardContent.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(CardContent);
