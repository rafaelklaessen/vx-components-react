import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Labels from './Labels';
import Label from './Label';
import Tab from '../Tab';

export const TabContext = React.createContext();

// TODO: Controlled version
export default class Tabs extends Component {
  state = {
    value: 0
  };

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  handleLabelClick = tabKey => () => this.setState({ value: tabKey });

  render = () => {
    const value = this.state.value;

    const children = Children.map(this.props.children, (child, i) =>
      React.cloneElement(child, {
        tabKey: child.type === Tab ? i : undefined
      })
    );

    return (
      <TabContext.Provider value={value}>
        <section>
          <Labels>
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
