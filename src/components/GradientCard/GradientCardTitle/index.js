import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const GradientCardTitle = styled('h3')({
  position: 'relative',
  marginTop: 0,
  marginBottom: 12,
  color: white,
  fontWeight: 400,
  zIndex: 1
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize * 1.1
}));

GradientCardTitle.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(GradientCardTitle);
