import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../ThemeContext/withTheme';
import { white } from '../../colors';

const Button = styled('button')({
  padding: '8px 20px',
  color: white,
  font: 'inherit',
  appearance: 'none',
  border: 0,
  outlineWidth: 0,
  borderRadius: 30
}, ({ theme, bold, imperfect }) => {
  const styles = [];

  styles.push({ backgroundColor: theme.primaryColor });
  styles.push({ fontFamily: bold ? theme.titleFontFamily : theme.fontFamily });

  if (bold) styles.push({ textTransform: 'uppercase' });

  if (imperfect) styles.push({ borderTopRightRadius: 0 });

  return styles;
});

Button.propTypes = {
  big: PropTypes.bool,
  imperfect: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Button.defaultProps = {
  big: false,
  imperfect: false
};

export default withTheme(Button);
