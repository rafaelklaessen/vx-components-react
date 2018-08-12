import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanelHeader from './ExpansionPanelHeader';
import ExpansionPanelContent from './ExpansionPanelContent';

export default class ExpansionPanel extends Component {
  static propTypes = {
    defaultExpanded: PropTypes.bool,
    expanded: PropTypes.bool,
    onChange: PropTypes.func,
    imperfect: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    defaultExpanded: false,
    imperfect: false,
    disabled: false
  };

  static Header = ExpansionPanelHeader;
  static Content = ExpansionPanelContent;

  state = {
    expanded: this.props.defaultExpanded
  };

  handleHeaderClick = () => {
    const { expanded, onChange, disabled } = this.props;
    if (disabled) return;
    if (onChange) return onChange(!expanded);
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };

  isExpanded = () => {
    const expanded = this.props.expanded;
    if (typeof expanded === 'undefined' || expanded === null) {
      return this.state.expanded;
    }
    return expanded;
  };

  render = () => {
    const {
      defaultExpanded,
      expanded: expandedProp,
      onChange,
      imperfect,
      disabled,
      children: originalChildren,
      ...props
    } = this.props;

    const expanded = this.isExpanded();

    const children = Children.map(originalChildren, (child) => {
      if (child.type === ExpansionPanelHeader) {
        return React.cloneElement(child, {
          expanded,
          onClick: this.handleHeaderClick,
          disabled
        });
      }

      if (child.type === ExpansionPanelContent) {
        return React.cloneElement(child, {
          expanded,
          disabled
        });
      }

      return child;
    });

    return (
      <div {...props}>
        {children}
      </div>
    );
  };
}
