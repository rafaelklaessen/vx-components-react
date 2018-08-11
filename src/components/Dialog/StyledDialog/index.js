import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../../colors';
import { transition, mediaQuery } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const CustomArticle = ({ open, ...props }) => <article {...props} />;

export const Animations = {
  SLIDE: 'SLIDE',
  GROW: 'GROW',
  FADE: 'FADE',
  NONE: 'NONE'
};

const StyledDialog = styled(CustomArticle)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: 32,
  backgroundColor: white,
  boxSizing: 'border-box',
  borderRadius: 4,
  transition,
  [mediaQuery(560)]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'none',
    opacity: 0,
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column'
  }
}, ({ open, width, animation, theme }) => {
  const styles = [];

  styles.push({
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    width
  });

  if (animation === Animations.SLIDE) {
    styles.push({ transform: 'translate(-50%, calc(-50% + 48px))' });
    if (open) styles.push({ transform: 'translate(-50%, -50%)' });
  }

  if (animation === Animations.GROW) {
    styles.push({ transform: 'translate(-50%, -50%) scale(0)' });
    if (open) styles.push({ transform: 'translate(-50%, -50%) scale(1)' });
  }

  if (animation === Animations.FADE) {
    styles.push({ transform: 'translate(-50%, -50%)', opacity: 0 });
    if (open) styles.push({ opacity: 1 });
  }

  if (animation === Animations.NONE) {
    styles.push({
      transform: 'translate(-50%, -50%)',
      transition: 'none'
    });
  }

  if (open) styles.push({
    [mediaQuery(560)]: {
      transform: 'none',
      opacity: 1
    }
  });

  return styles;
});

StyledDialog.propTypes = {
  open: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animation: PropTypes.oneOf(Object.values(Animations)),
  theme: PropTypes.object.isRequired
};

StyledDialog.defaultProps = {
  open: false,
  width: 480,
  animation: Animations.SLIDE
};

export default withTheme(StyledDialog);
