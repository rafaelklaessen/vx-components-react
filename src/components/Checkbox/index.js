import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import ToggleWrapper from '../ToggleWrapper';
import StyledCheckbox from './StyledCheckbox';

export default class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    inputProps: PropTypes.object,
    onChange: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    disabled: false,
    indeterminate: false,
    inputProps: null
  };

  random = Math.random().toString();

  getLabel = () =>
    Children.map(this.props.children, child =>
      React.cloneElement(child, {
        htmlFor: this.props.id || this.random,
        disabled: this.props.disabled
      })
    );

  render = () => {
    const {
      id,
      name,
      defaultChecked,
      checked,
      value,
      disabled,
      indeterminate,
      inputProps,
      onChange,
      children,
      ...props
    } = this.props;

    return (
      <ToggleWrapper {...props}>
        <StyledCheckbox
          id={id || this.random}
          name={name}
          type="checkbox"
          defaultChecked={defaultChecked}
          checked={checked}
          value={value}
          onChange={onChange}
          disabled={disabled}
          indeterminate={indeterminate}
          {...inputProps}
        />
        {this.getLabel()}
      </ToggleWrapper>
    );
  };
}
