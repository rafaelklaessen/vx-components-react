import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const GradientCardContent = styled('div')({
  position: 'relative',
  color: white,
  lineHeight: 1.4,
  opacity: .9,
  zIndex: 1
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

GradientCardContent.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(GradientCardContent);
