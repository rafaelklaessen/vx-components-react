import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const StyledGradientCard = styled('article')({
  position: 'relative',
  padding: 12,
  color: white,
  borderRadius: 14,
  overflow: 'hidden'
}, ({ centerContent, theme }) => ({
  textAlign: centerContent ? 'center' : 'left',
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

StyledGradientCard.propTypes = {
  centerContent: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

StyledGradientCard.defaultProps = {
  centerContent: false
};

export default withTheme(StyledGradientCard);
