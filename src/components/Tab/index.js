import React from 'react';
import PropTypes from 'prop-types';
import { TabContext } from '../Tabs/index';
import TabWrapper from './TabWrapper';

const Tab = ({ label, tabKey, children }) => (
  <TabContext.Consumer>
    {value =>
      <TabWrapper visible={value === tabKey}>
        {children}
      </TabWrapper>
    }
  </TabContext.Consumer>
);

Tab.propTypes = {
  label: PropTypes.node.isRequired,
  tabKey: PropTypes.number,
  children: PropTypes.node.isRequired
};

export default Tab;
