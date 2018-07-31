import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwitchWrapper from './SwitchWrapper';
import SwitchDot from './SwitchDot';

export default class Switch extends Component {
  static propTypes = {
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    dotProps: PropTypes.object,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    defaultChecked: false,
    dotProps: null,
    disabled: false
  };

  state = {
    checked: this.props.defaultChecked
  };

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

  render = () => {
    const {
      defaultChecked,
      checked: checkedProp,
      onChange,
      dotProps,
      ...props
    } = this.props;

    const checked = this.isChecked();
    return (
      <SwitchWrapper
        checked={checked}
        onClick={this.handleClick}
        {...props}
      >
        <SwitchDot checked={checked} {...dotProps} />
      </SwitchWrapper>
    );
  };
}
