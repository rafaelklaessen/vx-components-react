import React from 'react';
import PropTypes from 'prop-types';
import LabelWrapper from './LabelWrapper';
import LabelTitle from './LabelTitle';

const Label = ({ active, onClick, children }) => (
  <LabelWrapper active={active} onClick={onClick}>
    <LabelTitle active={active}>
      {children}
    </LabelTitle>
  </LabelWrapper>
);

Label.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Label.defaultProps = {
  active: false
};

export default Label;
