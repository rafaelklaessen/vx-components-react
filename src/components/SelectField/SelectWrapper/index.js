import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { lightGrey, ultraDarkGrey, red } from '../../../colors';
import { transition } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const SelectWrapper = styled('div')({
  position: 'relative',
  paddingLeft: 20,
  paddingRight: 20,
  width: 256,
  backgroundColor: lightGrey,
  border: `2px solid ${lightGrey}`,
  borderRadius: 100,
  display: 'inline-block',
  boxSizing: 'border-box',
  transition
}, ({ hasError, fullWidth, disabled, theme }) => {
  const styles = [];

  styles.push({
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize
  });

  if (hasError) styles.push({
    borderColor: red
  });

  if (fullWidth) styles.push({
    width: '100%'
  });

  if (disabled) styles.push({
    opacity: .5,
    cursor: 'not-allowed'
  });

  if (!disabled) styles.push({
    ':active': {
      borderColor: ultraDarkGrey
    }
  });

  return styles;
});

SelectWrapper.propTypes = {
  hasError: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired,
};

SelectWrapper.defaultProps = {
  hasError: false,
  fullWidth: false,
  disabled: false
};

export default withTheme(SelectWrapper);
