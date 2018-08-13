import React, { Children } from 'react';
import PropTypes from 'prop-types';
import OptionWrapper from './OptionWrapper';
import Option from './Option';

const isSelected = (optionKey, value, multi) => {
  if (!multi) return value === optionKey;
  return value.indexOf(optionKey) >= 0;
};

const Options = ({ options, selectValue, multi, onOptionClick, open }) => (
  <OptionWrapper open={open}>
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
  options: PropTypes.object.isRequired,
  selectValue: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.arrayOf(PropTypes.any)
  ]),
  multi: PropTypes.bool.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Options;
