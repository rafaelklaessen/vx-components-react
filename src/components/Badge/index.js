import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../colors';
import withTheme from '../ThemeContext/withTheme';

const Badge = styled('span')({
  fontWeight: 500,
  borderRadius: 100,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
}, ({ color, contentColor, positionedInCorner, theme }) => {
  const styles = [];

  styles.push({
    width: theme.fontSize * 1.4,
    height: theme.fontSize * 1.4,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize * .75,
  });

  styles.push({
    backgroundColor: color || theme.primaryColor,
    color: contentColor
  });

  if (positionedInCorner) styles.push({
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(40%, -40%)'
  });

  return styles;
});

Badge.propTypes = {
  color: PropTypes.string,
  contentColor: PropTypes.string,
  positionedInCorner: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Badge.defaultProps = {
  contentColor: white,
  positionedInCorner: false
};

export default withTheme(Badge);
