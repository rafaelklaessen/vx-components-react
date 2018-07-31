import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioWrapper from './RadioWrapper';
import StyledRadio from './StyledRadio';
import RadioLabel from './RadioLabel';

export default class Radio extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.node,
    wrapper: PropTypes.func,
    wrapperProps: PropTypes.object,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    wrapper: null,
    wrapperProps: null,
    disabled: false
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

    const Wrapper = wrapper || RadioWrapper;

    return (
      <Wrapper {...wrapperProps}>
        <StyledRadio
          id={id || this.random}
          disabled={disabled}
          type="radio"
          {...props}
        />
        {label &&
          <RadioLabel htmlFor={id || this.random} disabled={disabled}>
            {label}
          </RadioLabel>
        }
      </Wrapper>
    );
  };
}
