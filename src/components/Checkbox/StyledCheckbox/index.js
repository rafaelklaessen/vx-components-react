import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { lightGrey, darkGrey } from '../../../colors';
import { transition } from '../../../styles';
import getUrl from './icons/getUrl';
import { checkIcon, indeterminateIcon } from './icons';
import withTheme from '../../ThemeContext/withTheme';

const StyledCheckbox = styled('input')({
  order: 1,
  margin: 0,
  backgroundPosition: 'center',
  backgroundColor: lightGrey,
  borderRadius: 4,
  boxSizing: 'border-box',
  appearance: 'none',
  cursor: 'pointer',
  outlineWidth: 0,
  transition
}, ({ disabled, indeterminate, theme }) => {
  const styles = [];

  const size = theme.fontSize + theme.fontSize / 9;

  styles.push({
    width: size,
    height: size,
    backgroundSize: (theme.fontSize * 2) - 2
  });

  if (disabled) styles.push({
    opacity: .5,
    cursor: 'not-allowed',
    ':checked': {
      backgroundColor: darkGrey
    }
  });

  if (!disabled) styles.push({
    ':checked': {
      backgroundColor: theme.primaryColor
    }
  });

  if (!indeterminate) styles.push({
    ':checked': {
      backgroundImage: `url(${getUrl(checkIcon)})`,
    }
  });

  if (indeterminate) styles.push({
    backgroundColor: disabled ? darkGrey : theme.primaryColor,
    backgroundImage: `url(${getUrl(indeterminateIcon)})`,
  });

  return styles;
});

StyledCheckbox.propTypes = {
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

StyledCheckbox.defaultProps = {
  disabled: false,
  indeterminate: false
};

export default withTheme(StyledCheckbox);
