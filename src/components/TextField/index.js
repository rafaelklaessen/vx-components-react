import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputLabel from './InputLabel';
import StyledInput from './StyledInput';
import ErrorText from './ErrorText';

export default class TextField extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.node,
    errorText: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.any,
    autoComplete: PropTypes.any,
    list: PropTypes.any,
    size: PropTypes.any,
    pattern: PropTypes.any,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    rows: PropTypes.number,
    columns: PropTypes.number,
    type: PropTypes.string,
    labelProps: PropTypes.object,
    inputProps: PropTypes.object,
    errorTextProps: PropTypes.object,
    onChange: PropTypes.func,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    multiLine: PropTypes.bool,
    required: PropTypes.bool,
    autoFocus: PropTypes.bool,
    readOnly: PropTypes.bool
  };

  static defaultProps = {
    type: 'text',
    labelProps: null,
    inputProps: null,
    errorTextProps: null,
    fullWidth: false,
    disabled: false,
    multiLine: false,
    required: false,
    autoFocus: false,
    readOnly: false
  };

  random = Math.random().toString();

  render = () => {
    const {
      id,
      label,
      errorText,
      type,
      value,
      placeholder,
      autoComplete,
      list,
      size,
      pattern,
      minLength,
      maxLength,
      rows,
      columns,
      labelProps,
      inputProps,
      errorTextProps,
      onChange,
      fullWidth,
      disabled,
      multiLine,
      required,
      autoFocus,
      readOnly,
      ...props
    } = this.props;

    return (
      <div {...props}>
        {label &&
          <InputLabel
            htmlFor={id || this.random}
            disabled={disabled}
            {...labelProps}
          >
            {label}
          </InputLabel>
        }
        <StyledInput
          id={id || this.random}
          hasError={!!errorText}
          type={multiLine ? null : type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          list={list}
          size={size}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          rows={rows}
          columns={columns}
          onChange={onChange}
          fullWidth={fullWidth}
          disabled={disabled}
          multiLine={multiLine}
          required={required}
          autoFocus={autoFocus}
          readOnly={readOnly}
          {...inputProps}
        />
        {errorText &&
          <ErrorText {...errorTextProps}>
            {errorText}
          </ErrorText>
        }
      </div>
    );
  };
}
