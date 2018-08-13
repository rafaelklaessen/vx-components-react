import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldLabel from '../TextField/TextFieldLabel';
import SelectWrapper from './SelectWrapper';
import SelectedOptionsText from './SelectedOptionsText';
import CloseOverlay from './CloseOverlay';
import Options from './Options';
import Option from './Options/Option';
import ErrorText from '../TextField/ErrorText';

export default class SelectField extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.node,
    defaultValue: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    value: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    placeholder: PropTypes.node,
    errorText: PropTypes.node,
    onChange: PropTypes.func,
    selectionRenderer: PropTypes.func,
    labelProps: PropTypes.object,
    errorTextProps: PropTypes.object,
    multi: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    labelProps: null,
    errorTextProps: null,
    multi: false,
    fullWidth: false,
    disabled: false
  };

  static Option = Option;

  state = {
    value: this.props.defaultValue || (this.props.multi ? [] : null),
    open: false
  };

  random = Math.random().toString();

  handleClick = () => {
    if (this.props.disabled) return;
    this.setState(({ open }) => ({ open: !open }));
  };

  handleOptionClick = newValue => () => {
    const { onChange, multi, disabled } = this.props;
    const value = this.getValue();

    if (disabled) return;

    if (!multi) this.setState({ open: false });

    if (!multi && onChange) {
      return onChange(newValue);
    }

    if (!multi) {
      this.setState({
        value: newValue
      });
      return;
    }

    const newValueIndex = value.indexOf(newValue);

    if (newValueIndex < 0 && onChange) {
      onChange([newValue, ...value]);
      return;
    }

    if (newValueIndex < 0) {
      this.setState(({ value }) => ({
        value: [newValue, ...value]
      }));
      return;
    }

    const copy = [...value];
    copy.splice(newValueIndex, 1);

    if (onChange) {
      return onChange(copy);
    }
    this.setState({ value: copy });
  };

  getValue = () => {
    const value = this.props.value;
    if (typeof value === 'undefined' || value === null) {
      return this.state.value;
    }
    return value;
  };

  render = () => {
    const {
      id,
      label,
      defaultValue,
      value: valueProp,
      placeholder,
      errorText,
      onChange,
      selectionRenderer,
      labelProps,
      errorTextProps,
      multi,
      fullWidth,
      disabled,
      children,
      ...props
    } = this.props;
    const open = this.state.open;

    const value = this.getValue();

    return (
      <div {...props}>
        {label &&
          <TextFieldLabel
            id={id || this.random}
            disabled={disabled}
            {...labelProps}
          >
            {label}
          </TextFieldLabel>
        }
        <SelectWrapper
          id={id || this.random}
          hasError={!!errorText}
          fullWidth={fullWidth}
          disabled={disabled}
        >
          <SelectedOptionsText
            placeholder={placeholder}
            options={children}
            value={value}
            multi={multi}
            onClick={this.handleClick}
            selectionRenderer={selectionRenderer}
            open={open}
          />
          <CloseOverlay
            onClick={this.handleClick}
            open={open}
          />
          <Options
            options={children}
            selectValue={value}
            onOptionClick={this.handleOptionClick}
            multi={multi}
            fullWidth={fullWidth}
            open={open}
          />
        </SelectWrapper>
        {errorText &&
          <ErrorText {...errorTextProps}>
            {errorText}
          </ErrorText>
        }
      </div>
    );
  };
}
