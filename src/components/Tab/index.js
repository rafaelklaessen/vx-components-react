import React from 'react';
import PropTypes from 'prop-types';
import { TabContext } from '../Tabs/index';
import TabWrapper from './TabWrapper';

const Tab = ({ label, value, children, ...props }) => (
  <TabContext.Consumer>
    {contextValue =>
      <TabWrapper visible={value === contextValue} {...props}>
        {children}
      </TabWrapper>
    }
  </TabContext.Consumer>
);

Tab.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.any,
  children: PropTypes.node
};

export default Tab;
