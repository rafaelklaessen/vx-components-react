import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxWrapper from './CheckboxWrapper';
import StyledCheckbox from './StyledCheckbox';
import CheckboxLabel from './CheckboxLabel';

export default class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.node,
    wrapper: PropTypes.func,
    wrapperProps: PropTypes.object,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool
  };

  static defaultProps = {
    wrapper: null,
    wrapperProps: null,
    disabled: false,
    indeterminate: false
  };

  random = Math.random().toString();

  render = () => {
    const {
      id,
      label,
      wrapper,
      wrapperProps,
      disabled,
      ...props
    } = this.props;

    const Wrapper = wrapper || CheckboxWrapper;

    return (
      <Wrapper {...wrapperProps}>
        <StyledCheckbox
          id={id || this.random}
          disabled={disabled}
          type="checkbox"
          {...props}
        />
        <CheckboxLabel htmlFor={id || this.random} disabled={disabled}>
          {label}
        </CheckboxLabel>
      </Wrapper>
    );
  };
}
