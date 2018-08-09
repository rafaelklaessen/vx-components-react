import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white, lightGrey, darkGrey } from '../../../colors';
import { transition } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const StyledRadio = styled('input')({
  order: 1,
  margin: 0,
  backgroundColor: white,
  borderRadius: '50%',
  boxSizing: 'border-box',
  appearance: 'none',
  cursor: 'pointer',
  outlineWidth: 0,
  transition
}, ({ disabled, theme }) => {
  const styles = [];

  const size = theme.fontSize + theme.fontSize / 9;

  styles.push({
    width: size,
    height: size,
    border: `${size / 2}px solid ${lightGrey}`
  });

  if (disabled) styles.push({
    opacity: .5,
    cursor: 'not-allowed',
    ':checked': {
      border: `${size / 4}px solid ${darkGrey}`
    }
  });

  if (!disabled) styles.push({
    ':checked': {
      border: `${size / 4}px solid ${theme.primaryColor}`
    }
  });

  return styles;
});

StyledRadio.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

StyledRadio.defaultProps = {
  disabled: false
};

export default withTheme(StyledRadio);
