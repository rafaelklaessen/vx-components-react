import React from 'react';
import PropTypes from 'prop-types';
import StyledExpansionPanelHeader from './StyledExpansionPanelHeader';

const ExpansionPanelHeader = ({
  expanded,
  onClick,
  iconProps,
  imperfect,
  disabled,
  children,
  ...props
}) => (
  <StyledExpansionPanelHeader
    expanded={expanded}
    onClick={onClick}
    imperfect={imperfect}
    disabled={disabled}
    {...props}
  >
    {children}
  </StyledExpansionPanelHeader>
);

ExpansionPanelHeader.propTypes = {
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  iconProps: PropTypes.object,
  imperfect: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

ExpansionPanelHeader.defaultProps = {
  expanded: false,
  iconProps: null,
  imperfect: false,
  disabled: false
};

export default ExpansionPanelHeader;
