import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectWrapper from './SelectWrapper';
import SelectedOptionsText from './SelectedOptionsText';
import Options from './Options';
import Option from './Options/Option';
import ErrorText from '../TextField/ErrorText';

export default class SelectField extends Component {
  static propTypes = {
    placeholder: PropTypes.node,
    defaultValue: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    value: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    errorText: PropTypes.node,
    onChange: PropTypes.func,
    selectionRenderer: PropTypes.func,
    multi: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    multi: false,
    fullWidth: false,
    disabled: false
  };

  static Option = Option;

  state = {
    value: this.props.defaultValue || (this.props.multi ? [] : null),
    open: false
  };

  handleClick = () => this.setState({ open: !this.state.open });

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
      placeholder,
      defaultValue,
      value: valueProp,
      errorText,
      onChange,
      selectionRenderer,
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
        <SelectWrapper fullWidth={fullWidth} hasError={!!errorText}>
          <SelectedOptionsText
            placeholder={placeholder}
            options={children}
            value={value}
            multi={multi}
            onClick={this.handleClick}
            selectionRenderer={selectionRenderer}
            open={open}
          />
          <Options
            options={children}
            selectValue={value}
            multi={multi}
            onOptionClick={this.handleOptionClick}
            open={open}
          />
        </SelectWrapper>
        {errorText &&
          <ErrorText>{errorText}</ErrorText>
        }
      </div>
    );
  };
}
