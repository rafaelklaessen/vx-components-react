import React from 'react';
import PropTypes from 'prop-types';

const ExpansionPanelHeader = ({ onClick, ...props }) => (
  <div onClick={onClick}>{JSON.stringify(props)}</div>
);

ExpansionPanelHeader.propTypes = {
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: false
};

ExpansionPanelHeader.defaultProps = {
  expanded: false,
  disabled: false
};

export default ExpansionPanelHeader;
