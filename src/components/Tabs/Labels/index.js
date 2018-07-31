import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black, cardGrey } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const Labels = styled('header')({
  color: black,
  backgroundColor: cardGrey,
  display: 'flex',
  borderRadius: 14,
  overflow: 'hidden'
}, ({ imperfect, theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  borderTopRightRadius: imperfect ? 0 : 14
}));

Labels.propTypes = {
  imperfect: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Labels.defaultProps = {
  imperfect: false
};

export default withTheme(Labels);
