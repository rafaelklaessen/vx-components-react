import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';
import withTheme from '../ThemeContext/withTheme';
import { white } from '../../colors';
import { transition } from '../../styles';

const focused = keyframes`
  0% { transform: scale(.95); }
  50% { transform: scale(1.05); }
  100% { transform: scale(.95); }
`;

const Button = styled('button')({
  padding: '8px 20px',
  color: white,
  font: 'inherit',
  appearance: 'none',
  outlineWidth: 0,
  border: 0,
  borderRadius: 30,
  cursor: 'pointer',
  boxSizing: 'border-box',
  transition,
  ':hover': {
    transform: 'scale(1.05)'
  },
  ':active': {
    transform: 'scale(.95)'
  },
  ':focus': {
    animation: `${focused} 4s ease infinite`,
    transformOrigin: 'center bottom'
  }
}, ({ theme, bold, imperfect, primary }) => {
  const styles = [];

  const color = primary ? theme.primaryColor : theme.secondaryColor;

  styles.push({
    backgroundColor: color
  });

  styles.push({ fontFamily: bold ? theme.titleFontFamily : theme.fontFamily });

  if (bold) styles.push({
    lineHeight: 1.8,
    fontWeight: 800,
    textTransform: 'uppercase'
  });

  if (imperfect) styles.push({ borderTopRightRadius: 0 });

  return styles;
});

Button.propTypes = {
  big: PropTypes.bool,
  imperfect: PropTypes.bool,
  primary: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Button.defaultProps = {
  big: false,
  imperfect: false,
  primary: false
};

export default withTheme(Button);
