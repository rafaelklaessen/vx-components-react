import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectWrapper from './SelectWrapper';
import SelectedOptionsText from './SelectedOptionsText';
import Options from './Options';
import ErrorText from '../TextField/ErrorText';

export default class SelectField extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    errorText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    multi: PropTypes.bool,
    fullWidth: PropTypes.bool
  };

  static defaultProps = {
    errorText: '',
    multi: false,
    fullWidth: false
  };

  state = {
    open: false
  };

  handleClick = () => this.setState({ open: !this.state.open });

  handleOptionClick = newValue => () => {
    const { value, onChange, multi } = this.props;

    if (!multi) this.setState({ open: false });

    if (!multi) {
      onChange(newValue);
      return;
    }

    const newValueIndex = value.indexOf(newValue);
    if (newValueIndex < 0) {
      onChange([newValue, ...value]);
      return;
    }

    const copy = [...value];
    copy.splice(newValueIndex, 1);
    onChange(copy);
  };

  render = () => {
    const {
      placeholder,
      options,
      value,
      errorText,
      multi,
      fullWidth,
      ...props
    } = this.props;
    const open = this.state.open;

    return (
      <div {...props}>
        <SelectWrapper fullWidth={fullWidth} hasError={!!errorText}>
          <SelectedOptionsText
            placeholder={placeholder}
            options={options}
            value={value}
            multi={multi}
            onClick={this.handleClick}
            open={open}
          />
          <Options
            options={options}
            value={value}
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
