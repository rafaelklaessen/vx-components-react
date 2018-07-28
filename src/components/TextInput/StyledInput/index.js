import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { lightGrey, ultraDarkGrey, red } from '../../../colors';
import { transition } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const StyledInput = styled('input')({
  padding: '8px 20px',
  backgroundColor: lightGrey,
  font: 'inherit',
  border: 0,
  appearance: 'none',
  outlineWidth: 0,
  boxSizing: 'border-box',
  border: `2px solid ${lightGrey}`,
  borderRadius: 30,
  transition,
  ':focus': {
    borderColor: ultraDarkGrey
  }
}, ({ hasError, fullWidth, disabled, theme }) => {
  const styles = [];

  styles.push({
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize
  });

  if (hasError) {
    styles.push({
      borderColor: red
    });
  }

  if (fullWidth) styles.push({ width: '100%' });

  if (disabled) styles.push({ opacity: .5 });

  return styles;
});

StyledInput.propTypes = {
  hasError: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

StyledInput.defaultProps = {
  hasError: false,
  fullWidth: false,
  disabled: false
};

export default withTheme(StyledInput);
