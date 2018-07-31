import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { darkGrey } from '../../../colors';
import { transition } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const SwitchWrapper = styled('div')({
  position: 'relative',
  width: 35,
  height: 20,
  border: `2px solid ${darkGrey}`,
  borderRadius: 10,
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition
}, ({ checked, disabled, theme }) => {
  const styles = [];

  if (checked) styles.push({
    backgroundColor: theme.primaryColor,
    borderColor: theme.primaryColor
  });

  if (disabled) styles.push({
    opacity: .5,
    cursor: 'not-allowed'
  });

  if (disabled && checked) styles.push({
    backgroundColor: darkGrey,
    borderColor: darkGrey
  });

  return styles;
});

SwitchWrapper.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

SwitchWrapper.defaultProps = {
  checked: false,
  disabled: false
};

export default withTheme(SwitchWrapper);
