import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../ThemeContext/withTheme';
import { white } from '../../colors';
import { transition } from '../../styles';

const Button = styled('button')({
  padding: '8px 20px',
  color: white,
  font: 'inherit',
  appearance: 'none',
  outlineWidth: 0,
  border: 0,
  cursor: 'pointer',
  boxSizing: 'border-box',
  transition,
  ':hover': {
    transform: 'scale(1.05)'
  },
  ':active': {
    transform: 'scale(.95)'
  }
}, ({
  bold,
  imperfect,
  primary,
  fullWidth,
  borderRadius,
  disabled,
  rect,
  theme
}) => {
  const styles = [];

  const color = primary ? theme.primaryColor : theme.secondaryColor;

  styles.push({
    fontFamily: bold ? theme.titleFontFamily : theme.fontFamily,
    fontSize: theme.fontSize,
    fontWeight: bold ? 800 : 400
  });

  styles.push({
    backgroundColor: color,
    borderRadius
  });

  if (bold) styles.push({
    lineHeight: 1.8,
    textTransform: 'uppercase'
  });

  if (imperfect) styles.push({ borderTopRightRadius: 0 });

  if (fullWidth) styles.push({ width: '100%' });

  if (disabled) styles.push({
    opacity: .5,
    cursor: 'not-allowed',
    ':hover': {
      transform: 'scale(1)'
    }
  });

  if (rect) styles.push({
    borderRadius: 0
  });

  return styles;
});

Button.propTypes = {
  big: PropTypes.bool,
  imperfect: PropTypes.bool,
  primary: PropTypes.bool,
  fullWidth: PropTypes.bool,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  rect: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Button.defaultProps = {
  big: false,
  imperfect: false,
  primary: false,
  fullWidth: false,
  borderRadius: 30,
  disabled: false,
  rect: false
};

export default withTheme(Button);
