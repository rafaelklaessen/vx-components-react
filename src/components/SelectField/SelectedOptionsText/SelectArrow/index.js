import React from 'react';
import SelectArrowWrapper from './SelectArrowWrapper';
import SelectArrowIcon from './SelectArrowIcon';

const SelectArrow = props => (
  <SelectArrowWrapper {...props}>
    <SelectArrowIcon />
  </SelectArrowWrapper>
);

export default SelectArrow;
