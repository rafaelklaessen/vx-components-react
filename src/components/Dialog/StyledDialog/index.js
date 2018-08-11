import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../../colors';
import { transition, mediaQuery } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const CustomArticle = ({ open, ...props }) => <article {...props} />

const StyledDialog = styled(CustomArticle)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
  padding: 32,
  width: 480,
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
}, ({ open, theme }) => {
  const styles = [];

  styles.push({
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize
  });

  if (open) styles.push({
    transform: 'translate(-50%, -50%) scale(1)',
    [mediaQuery(560)]: {
      transform: 'none',
      opacity: 1
    }
  });

  return styles;
});

StyledDialog.propTypes = {
  open: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

StyledDialog.defaultProps = {
  open: false
};

export default withTheme(StyledDialog);
