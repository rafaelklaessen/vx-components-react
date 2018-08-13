import React from 'react';
import PropTypes from 'prop-types';
import OptionWrapper from './OptionWrapper';
import Option from './Option';

const isSelected = (optionKey, value, multi) => {
  if (!multi) return value === optionKey;
  return value.indexOf(optionKey) >= 0;
};

const Options = ({ options, value, multi, onOptionClick, open }) => (
  <OptionWrapper open={open}>
    {Object.entries(options).map(([ optionKey, optionValue ]) =>
      <Option
        selected={isSelected(optionKey, value, multi)}
        onClick={onOptionClick(optionKey)}
        key={optionKey}
      >
        {optionValue}
      </Option>
    )}
  </OptionWrapper>
);

Options.propTypes = {
  options: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  multi: PropTypes.bool.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Options;
