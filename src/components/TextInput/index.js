import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputLabel from './InputLabel';
import StyledInput from './StyledInput';
import ErrorText from './ErrorText';

export default class TextInput extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.node,
    errorText: PropTypes.string,
    type: PropTypes.string,
    wrapper: PropTypes.func,
    wrapperProps: PropTypes.object,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    multiLine: PropTypes.bool
  };

  static defaultProps = {
    type: 'text',
    wrapper: null,
    wrapperProps: {},
    fullWidth: false,
    disabled: false,
    multiLine: false
  };

  random = Math.random().toString();

  render = () => {
    const {
      id,
      label,
      errorText,
      type,
      wrapper,
      wrapperProps,
      disabled,
      multiLine,
      ...props
    } = this.props;

    const Wrapper = wrapper || 'div';

    return (
      <Wrapper {...wrapperProps}>
        <InputLabel htmlFor={id || this.random} disabled={disabled}>
          {label}
        </InputLabel>
        <StyledInput
          id={id || this.random}
          hasError={!!errorText}
          disabled={disabled}
          type={multiLine ? null : type}
          multiLine={multiLine}
          {...props}
        />
        {errorText &&
          <ErrorText>{errorText}</ErrorText>
        }
      </Wrapper>
    );
  };
}
