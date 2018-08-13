import React, { Children } from 'react';
import PropTypes from 'prop-types';
import OptionWrapper from './OptionWrapper';
import Option from './Option';

const isSelected = (optionKey, value, multi) => {
  if (!multi) return value === optionKey;
  return value.indexOf(optionKey) >= 0;
};

const Options = ({
  options,
  selectValue,
  onOptionClick,
  multi,
  fullWidth,
  open
}) => (
  <OptionWrapper fullWidth={fullWidth} open={open}>
    {Children.map(options, (option, i) => {
      const value = option.props.value || `__option__-${i}`;
      return React.cloneElement(option, {
        value,
        selected: isSelected(value, selectValue, multi),
        onClick: onOptionClick(value)
      });
    })}
  </OptionWrapper>
);

Options.propTypes = {
  options: PropTypes.node,
  selectValue: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.arrayOf(PropTypes.any)
  ]),
  onOptionClick: PropTypes.func,
  multi: PropTypes.bool,
  fullWidth: PropTypes.bool,
  open: PropTypes.bool
};

Options.defaultProps = {
  multi: false,
  fullWidth: false,
  open: false
};

export default Options;
