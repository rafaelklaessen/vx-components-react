import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Labels from './Labels';
import Label from './Label';

export const TabContext = React.createContext();

export default class Tabs extends Component {
  static propTypes = {
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    onChange: PropTypes.func,
    labelWrapper: PropTypes.func,
    labelWrapperProps: PropTypes.object,
    labelComponent: PropTypes.func,
    labelProps: PropTypes.object,
    imperfect: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    defaultValue: 0,
    imperfect: false
  };

  state = {
    value: this.props.defaultValue
  };

  handleLabelClick = value => () => {
    const onChange = this.props.onChange;
    if (onChange) return onChange(value);
    this.setState({ value: value });
  };

  render = () => {
    const {
      value: valueProp,
      onChange,
      imperfect,
      labelWrapper,
      labelWrapperProps,
      labelComponent,
      labelProps,
      children: originalChildren,
      ...props
    } = this.props;

    const value = valueProp || this.state.value;

    const children = Children.map(originalChildren, (child, i) =>
      React.cloneElement(child, {
        value: child.props.value || i
      })
    );

    const LabelWrapper = labelWrapper || Labels;
    const LabelComponent = labelComponent || Label;

    return (
      <TabContext.Provider value={value}>
        <section {...props}>
          <LabelWrapper imperfect={imperfect} {...labelWrapperProps}>
            {Children.map(children, child =>
              <LabelComponent
                active={child.props.value === value}
                onClick={this.handleLabelClick(child.props.value)}
                {...labelProps}
              >
                {child.props.label}
              </LabelComponent>
            )}
          </LabelWrapper>
          <div>
            {children}
          </div>
        </section>
      </TabContext.Provider>
    );
  }
}
