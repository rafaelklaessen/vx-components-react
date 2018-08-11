import React from 'react';
import PropTypes from 'prop-types';
import { TabContext } from '../Tabs/index';
import TabWrapper from './TabWrapper';

const Tab = ({ label, tabKey, children, ...props }) => (
  <TabContext.Consumer>
    {value =>
      <TabWrapper visible={value === tabKey} {...props}>
        {children}
      </TabWrapper>
    }
  </TabContext.Consumer>
);

Tab.propTypes = {
  label: PropTypes.node.isRequired,
  tabKey: PropTypes.any,
  children: PropTypes.node
};

export default Tab;
