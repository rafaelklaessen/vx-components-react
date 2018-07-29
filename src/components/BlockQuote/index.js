import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ultraDarkGrey } from '../../colors';
import withTheme from '../ThemeContext/withTheme';

const BlockQuote = styled('blockquote')({
  padding: '8px 16px',
  lineHeight: 1.8,
  color: ultraDarkGrey,
  borderLeft: '2px solid #EFEFEF'
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

BlockQuote.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(BlockQuote);
