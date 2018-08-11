import React from 'react';
import PropTypes from 'prop-types';
import DialogWrapper from './DialogWrapper';
import DialogOverlay from './DialogOverlay';
import StyledDialog from './StyledDialog';
import CloseButton from './CloseButton';
import DialogLabel from './DialogLabel';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

const Dialog = ({
  open,
  width,
  wrapperProps,
  overlayProps,
  closeButtonProps,
  onRequestClose,
  children,
  ...props
}) => (
  <DialogWrapper open={open} {...wrapperProps}>
    <DialogOverlay open={open} onClick={onRequestClose} {...overlayProps} />
    <StyledDialog open={open} width={width} {...props}>
      <CloseButton onClick={onRequestClose} {...closeButtonProps} />
      {children}
    </StyledDialog>
  </DialogWrapper>
);

Dialog.propTypes = {
  open: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  wrapperProps: PropTypes.object,
  overlayProps: PropTypes.object,
  closeButtonProps: PropTypes.object,
  onRequestClose: PropTypes.func,
  children: PropTypes.node
};

Dialog.defaultProps = {
  open: false,
  width: 480,
  wrapperProps: null,
  overlayProps: null,
  closeButtonProps: null
};

Dialog.Label = DialogLabel;
Dialog.Title = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;

export default Dialog;
