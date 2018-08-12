import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { cardGrey } from '../../../../colors';
import { transition } from '../../../../styles';
import withTheme from '../../../ThemeContext/withTheme';

const CustomHeader = ({ expanded, imperfect, disabled, ...props }) =>
  <header {...props} />;

const StyledExpansionPanelHeader = styled(CustomHeader)({
  padding: '16px 36px',
  backgroundColor: cardGrey,
  borderRadius: 14,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  transition
}, ({ expanded, imperfect, disabled, theme }) => {
  const styles = [];

  styles.push({
    color: theme.primaryColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    borderBottom: `0 solid #E0E0E0`,
  });

  if (expanded) styles.push({
    borderWidth: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  });

  if (imperfect) styles.push({
    borderTopRightRadius: 0
  });

  if (disabled) styles.push({
    opacity: .5,
    cursor: 'not-allowed'
  });

  return styles;
});

StyledExpansionPanelHeader.propTypes = {
  expanded: PropTypes.bool,
  imperfect: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

StyledExpansionPanelHeader.defaultProps = {
  expanded: false,
  imperfect: false,
  disabled: false
};

export default withTheme(StyledExpansionPanelHeader);
