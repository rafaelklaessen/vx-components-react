import React from 'react';
import PropTypes from 'prop-types';
import DialogWrapper from './DialogWrapper';
import DialogOverlay from './DialogOverlay';
import StyledDialog, { Animations } from './StyledDialog';
import CloseButton from './CloseButton';
import DialogLabel from './DialogLabel';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

const Dialog = ({
  open,
  width,
  animation,
  wrapperProps,
  overlayProps,
  closeButtonProps,
  onRequestClose,
  children,
  ...props
}) => (
  <DialogWrapper open={open} {...wrapperProps}>
    <DialogOverlay
      open={open}
      onClick={onRequestClose}
      noAnimation={animation === Animations.NONE}
      {...overlayProps}
    />
    <StyledDialog open={open} width={width} animation={animation} {...props}>
      <CloseButton onClick={onRequestClose} {...closeButtonProps} />
      {children}
    </StyledDialog>
  </DialogWrapper>
);

Dialog.propTypes = {
  open: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animation: PropTypes.oneOf([
    Animations.SLIDE,
    Animations.GROW,
    Animations.FADE,
    Animations.NONE
  ]),
  wrapperProps: PropTypes.object,
  overlayProps: PropTypes.object,
  closeButtonProps: PropTypes.object,
  onRequestClose: PropTypes.func,
  children: PropTypes.node
};

Dialog.defaultProps = {
  open: false,
  width: 480,
  animation: Animations.SLIDE,
  wrapperProps: null,
  overlayProps: null,
  closeButtonProps: null
};

Dialog.Label = DialogLabel;
Dialog.Title = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;

Dialog.Animations = Animations;

export default Dialog;
