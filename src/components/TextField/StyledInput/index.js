import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { lightGrey, red, ultraDarkGrey } from '../../../colors';
import { transition } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const styleAsInput = Component => styled(Component)({
  padding: '8px 20px',
  width: 256,
  backgroundColor: lightGrey,
  font: 'inherit',
  border: 0,
  appearance: 'none',
  outlineWidth: 0,
  boxSizing: 'border-box',
  border: `2px solid ${lightGrey}`,
  borderRadius: 100,
  transition
}, ({ hasError, fullWidth, disabled, multiLine, readOnly, theme }) => {
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

  if (multiLine) styles.push({
    minHeight: 23 + theme.fontSize,
    resize: 'none'
  });

  if (!readOnly) styles.push({
    ':focus': {
      borderColor: ultraDarkGrey
    }
  });

  return styles;
});

const StyledInput = ({ multiLine, ...props }) => {
  const Input = styleAsInput(multiLine ? 'textarea' : 'input');
  return <Input multiLine={multiLine} {...props} />
};

StyledInput.propTypes = {
  hasError: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  multiLine: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

StyledInput.defaultProps = {
  hasError: false,
  fullWidth: false,
  disabled: false,
  multiLine: false
};

export default withTheme(StyledInput);
