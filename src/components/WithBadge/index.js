import React, { Children } from 'react';
import PropTypes from 'prop-types';
import BadgeWrapper from './BadgeWrapper';
import Badge from '../Badge';

const WithBadge = ({ badge, children, ...props }) => (
  <BadgeWrapper {...props}>
    {children}
    {Children.map(badge, (child) => {
      if (child.type !== Badge) return child;
      return React.cloneElement(child, {
        positionedInCorner: true
      });
    })}
  </BadgeWrapper>
);

WithBadge.propTypes = {
  badge: PropTypes.node,
  children: PropTypes.node
};

export default WithBadge;
