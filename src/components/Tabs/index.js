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

  handleLabelClick = tabKey => () => {
    const onChange = this.props.onChange;
    if (onChange) return onChange(tabKey);
    this.setState({ value: tabKey });
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
        tabKey: child.props.tabKey || i
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
                active={child.props.tabKey === value}
                onClick={this.handleLabelClick(child.props.tabKey)}
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
