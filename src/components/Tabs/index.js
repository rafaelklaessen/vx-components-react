import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Labels from './Labels';
import Label from './Label';
import Tab from '../Tab';

export const TabContext = React.createContext();

export default class Tabs extends Component {
  static propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    imperfect: PropTypes.bool,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    imperfect: false
  };

  state = {
    value: 0
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
      children: originalChildren,
      ...props
    } = this.props;

    const value = valueProp || this.state.value;

    const children = Children.map(originalChildren, (child, i) =>
      React.cloneElement(child, {
        tabKey: child.type === Tab ? child.props.tabKey || i : undefined
      })
    );

    return (
      <TabContext.Provider value={value}>
        <section {...props}>
          <Labels imperfect={imperfect}>
            {Children.map(children, child =>
              child.type === Tab ? (
                <Label
                  active={child.props.tabKey === value}
                  onClick={this.handleLabelClick(child.props.tabKey)}
                >
                  {child.props.label}
                </Label>
              ) : null
            )}
          </Labels>
          <div>
            {children}
          </div>
        </section>
      </TabContext.Provider>
    );
  }
}
