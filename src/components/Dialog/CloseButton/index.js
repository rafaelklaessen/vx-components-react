import React from 'react';
import CloseButtonWrapper from './CloseButtonWrapper';
import CloseIcon from './CloseIcon';

const CloseButton = props => (
  <CloseButtonWrapper {...props}>
    <CloseIcon />
  </CloseButtonWrapper>
);

export default CloseButton;
