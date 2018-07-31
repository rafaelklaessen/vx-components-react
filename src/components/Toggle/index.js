import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleWrapper from './ToggleWrapper';
import ToggleDot from './ToggleDot';

export default class Toggle extends Component {
  static propTypes = {
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    defaultChecked: false,
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
      ...props
    } = this.props;

    const checked = this.isChecked();
    return (
      <ToggleWrapper
        checked={checked}
        onClick={this.handleClick}
        {...props}
      >
        <ToggleDot checked={checked} />
      </ToggleWrapper>
    );
  };
}
