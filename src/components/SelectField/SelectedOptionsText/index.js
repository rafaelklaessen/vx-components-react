import React, { Children } from 'react';
import PropTypes from 'prop-types';
import TextWrapper from './TextWrapper';
import PlaceholderWrapper from './PlaceholderWrapper';
import Placeholder from './Placeholder';
import { getOptionKey } from '../Option';
import SelectArrow from './SelectArrow';

const selectedOptionsText = (
  placeholder,
  options,
  value,
  selectionRenderer,
  placeholderProps,
  multi,
) => {
  const optionsArr = Children.map(options, (option, i) => ({
    key: option.props.value || getOptionKey(i),
    value: option.props.children
  }));
  const optionsObj = optionsArr.reduce((acc, { key, value }) => {
    acc[key] = value;
    return acc;
  }, {});

  if (!value || (Array.isArray(value) && value.length === 0)) {
    return (
      <Placeholder {...placeholderProps}>
        {placeholder}
      </Placeholder>
    );
  }

  if (!multi && !optionsObj[value]) {
    return (
      <Placeholder {...placeholderProps}>
        {placeholder}
      </Placeholder>
    );
  }

  if (selectionRenderer) {
    return selectionRenderer(value, optionsObj, multi);
  }

  if (!multi) {
    return extractChildrenFromNode(optionsObj[value]);
  }

  return value
    .map(optionKey => optionsObj[optionKey])
    .map(extractChildrenFromNode)
    .sort()
    .join(', ');
};

const extractChildrenFromNode = (element) => {
  if (typeof element === 'string' || typeof element === 'number') {
    return element;
  }

  if (Array.isArray(element)) {
    return element.map(extractChildrenFromNode).join('');
  }

  if (!element.props || !element.props.children) return '';

  const children = element.props.children;

  return extractChildrenFromNode(children);
};

const SelectedOptionsText = ({
  placeholder,
  options,
  value,
  onClick,
  selectionRenderer,
  placeholderWrapperProps,
  placeholderProps,
  arrowProps,
  multi,
  open,
  ...props
}) => (
  <TextWrapper onClick={onClick} {...props}>
    <PlaceholderWrapper {...placeholderWrapperProps}>
      {selectedOptionsText(
        placeholder,
        options,
        value,
        selectionRenderer,
        placeholderProps,
        multi
      )}
    </PlaceholderWrapper>
    <SelectArrow {...arrowProps} />
  </TextWrapper>
);

SelectedOptionsText.propTypes = {
  placeholder: PropTypes.node,
  options: PropTypes.node,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  onClick: PropTypes.func,
  selectionRenderer: PropTypes.func,
  placeholderWrapperProps: PropTypes.object,
  placeholderProps: PropTypes.object,
  arrowProps: PropTypes.object,
  multi: PropTypes.bool,
  open: PropTypes.bool
};

SelectedOptionsText.defaultProps = {
  placeholderWrapperProps: null,
  placeholderProps: null,
  arrowProps: null,
  multi: false,
  open: false
};

export default SelectedOptionsText;
