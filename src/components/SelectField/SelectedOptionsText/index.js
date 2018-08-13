import React from 'react';
import PropTypes from 'prop-types';
import TextWrapper from './TextWrapper';
import PlaceholderWrapper from './PlaceholderWrapper';
import Placeholder from './Placeholder';

const selectedOptionsText = (placeholder, options, value, multi) => {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return <Placeholder>{placeholder}</Placeholder>;
  }

  if (!multi) {
    return options[value] || <Placeholder>{placeholder}</Placeholder>;
  }

  return value.map(optionKey => options[optionKey]).sort().join(', ');
};

const SelectedOptionsText = ({
  placeholder,
  options,
  value,
  onClick,
  open,
  multi
}) => (
  <TextWrapper onClick={onClick}>
    <PlaceholderWrapper>
      {selectedOptionsText(placeholder, options, value, multi)}
    </PlaceholderWrapper>
  </TextWrapper>
);

SelectedOptionsText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  multi: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default SelectedOptionsText;
