import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DialogWrapper from './DialogWrapper';
import DialogOverlay from './DialogOverlay';
import StyledDialog, { Animations } from './StyledDialog';
import CloseButton from './CloseButton';
import DialogLabel from './DialogLabel';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

export default class Dialog extends Component {
  static propTypes = {
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

  static defaultProps = {
    open: false,
    width: 480,
    animation: Animations.SLIDE,
    wrapperProps: null,
    overlayProps: null,
    closeButtonProps: null
  };

  static Label = DialogLabel;
  static Title = DialogTitle;
  static Content = DialogContent;
  static Actions = DialogActions;

  static Animations = Animations;

  componentDidMount = () =>
    document.addEventListener('keydown', this.handleKeyDown);

  componentWillUnmount = () =>
    document.removeEventListener('keydown', this.handleKeyDown);

  handleKeyDown = (e) => {
    const code = e.keyCode || e.which;
    if (code !== 27) return;
    this.props.onRequestClose(e);
  };

  render = () => {
    const {
      open,
      width,
      animation,
      wrapperProps,
      overlayProps,
      closeButtonProps,
      onRequestClose,
      children,
      ...props
    } = this.props;
   return (
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
  };
}
