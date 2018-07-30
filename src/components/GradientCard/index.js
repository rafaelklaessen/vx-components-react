import React from 'react';
import PropTypes from 'prop-types';
import StyledGradientCard from './StyledGradientCard';
import GradientCardTitle from './GradientCardTitle';
import GradientCardContent from './GradientCardContent';

const GradientCard = ({ gradient, children, ...props }) => (
  <StyledGradientCard {...props}>
    {gradient}
    {children}
  </StyledGradientCard>
);

GradientCard.propTypes = {
  gradient: PropTypes.node.isRequired,
  centerContent: PropTypes.bool
};

GradientCard.defaultProps = {
  centerContent: false
};

GradientCard.Title = GradientCardTitle;
GradientCard.Content = GradientCardContent;

export default GradientCard;
