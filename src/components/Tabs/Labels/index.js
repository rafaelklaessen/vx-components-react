import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const Labels = styled('header')({
  color: black,
  backgroundColor: '#FBFBFB',
  display: 'flex'
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

Labels.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(Labels);
