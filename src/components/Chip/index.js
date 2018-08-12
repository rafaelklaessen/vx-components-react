import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black } from '../../colors';
import { transition } from '../../styles';
import withTheme from '../ThemeContext/withTheme';
import DeleteButton from './DeleteButton';

const Chip = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  transition
}, ({
  color,
  contentColor,
  borderRadius,
  imperfect,
  rect,
  onClick,
  theme
}) => {
  const styles = [];

  styles.push({
    paddingLeft: theme.fontSize / 1.25,
    paddingRight: theme.fontSize / 1.25,
    height: theme.fontSize * 2,
    fontSize: theme.fontSize * .8,
    fontFamily: theme.fontFamily,
    color: contentColor,
    backgroundColor: color,
    borderRadius
  });

  if (imperfect) styles.push({
    borderTopRightRadius: 0
  });

  if (rect) styles.push({
    borderRadius: 0
  });

  if (onClick) styles.push({
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.05)'
    }
  });

  return styles;
});

Chip.propTypes = {
  color: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imperfect: PropTypes.bool,
  rect: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Chip.defaultProps = {
  color: '#E0E0E0',
  contentColor: black,
  borderRadius: 100,
  imperfect: false,
  rect: false
};

const ThemedChip = withTheme(Chip);

ThemedChip.DeleteButton = DeleteButton;

export default ThemedChip;
