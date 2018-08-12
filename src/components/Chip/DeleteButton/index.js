import React from 'react';
import PropTypes from 'prop-types';
import DeleteButtonWrapper from './DeleteButtonWrapper';
import DeleteIcon from './DeleteIcon';
import { black } from '../../../colors';

const DeleteButton = ({ children, ...props }) => (
  <DeleteButtonWrapper {...props}>
    {children || <DeleteIcon />}
  </DeleteButtonWrapper>
);

DeleteButton.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string
};

DeleteButton.defaultProps = {
  color: 'rgba(0, 0, 0, .35)',
  hoverColor: black
};

export default DeleteButton;
