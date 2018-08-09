import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import ToggleWrapper from '../ToggleWrapper';
import SwitchWrapper from './SwitchWrapper';
import SwitchDot from './SwitchDot';

export default class Switch extends Component {
  static propTypes = {
    id: PropTypes.string,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    switchProps: PropTypes.object,
    dotProps: PropTypes.object,
    onChange: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    defaultChecked: false,
    disabled: false,
    switchProps: null,
    dotProps: null
  };

  state = {
    checked: this.props.defaultChecked
  };

  random = Math.random().toString();

  handleClick = () => {
    const { checked, onChange, disabled } = this.props;
    if (disabled) return;
    if (onChange) return onChange(!this.props.checked);
    this.setState(({ checked }) => ({ checked: !checked }));
  };

  isChecked = () => {
    const checked = this.props.checked;
    if (typeof checked === 'undefined' || checked === null) {
      return this.state.checked;
    }
    return checked;
  };

  getLabel = () =>
    Children.map(this.props.children, child =>
      React.cloneElement(child, {
        htmlFor: this.props.id || this.random,
        disabled: this.props.disabled,
        onClick: this.handleClick
      })
    );

  render = () => {
    const {
      id,
      defaultChecked,
      checked: checkedProp,
      disabled,
      switchProps,
      dotProps,
      onChange,
      children,
      ...props
    } = this.props;

    const checked = this.isChecked();
    return (
      <ToggleWrapper {...props}>
        <SwitchWrapper
          id={id}
          checked={checked}
          onClick={this.handleClick}
          disabled={disabled}
          {...switchProps}
        >
          <SwitchDot checked={checked} {...dotProps} />
        </SwitchWrapper>
        {this.getLabel()}
      </ToggleWrapper>
    );
  };
}
