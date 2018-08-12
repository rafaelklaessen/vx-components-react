import React from 'react';
import PropTypes from 'prop-types';
import StyledExpansionPanelHeader from './StyledExpansionPanelHeader';
import ArrowButton from './ArrowButton';

const ExpansionPanelHeader = ({
  expanded,
  onClick,
  arrowButtonProps,
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
    <ArrowButton rotated={expanded} {...arrowButtonProps} />
  </StyledExpansionPanelHeader>
);

ExpansionPanelHeader.propTypes = {
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  arrowButtonProps: PropTypes.object,
  imperfect: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

ExpansionPanelHeader.defaultProps = {
  expanded: false,
  arrowButtonProps: null,
  imperfect: false,
  disabled: false
};

export default ExpansionPanelHeader;
