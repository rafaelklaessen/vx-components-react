import React, { Children } from 'react';
import PropTypes from 'prop-types';
import TextWrapper from './TextWrapper';
import PlaceholderWrapper from './PlaceholderWrapper';
import Placeholder from './Placeholder';

const selectedOptionsText = (
  placeholder,
  options,
  value,
  selectionRenderer,
  multi
) => {
  const optionsArr = Children.map(options, (option, i) => ({
    key: option.props.value || `__option__-${i}`,
    value: option.props.children
  }));
  const optionsObj = optionsArr.reduce((acc, { key, value }) => {
    acc[key] = value;
    return acc;
  }, {});

  if (!value || (Array.isArray(value) && value.length === 0)) {
    return <Placeholder>{placeholder}</Placeholder>;
  }

  if (!multi && !optionsObj[value]) {
    return <Placeholder>{placeholder}</Placeholder>
  }

  if (selectionRenderer) {
    return selectionRenderer(value, optionsObj, multi);
  }

  if (!multi) {
    return optionsObj[value];
  }

  return value.map(optionKey => optionsObj[optionKey]).sort().join(', ');
};

const SelectedOptionsText = ({
  placeholder,
  options,
  value,
  onClick,
  selectionRenderer,
  open,
  multi
}) => (
  <TextWrapper onClick={onClick}>
    <PlaceholderWrapper>
      {selectedOptionsText(
        placeholder,
        options,
        value,
        selectionRenderer,
        multi
      )}
    </PlaceholderWrapper>
  </TextWrapper>
);

SelectedOptionsText.propTypes = {
  placeholder: PropTypes.string,
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
