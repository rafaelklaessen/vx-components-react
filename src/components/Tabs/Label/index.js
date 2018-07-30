import React from 'react';
import PropTypes from 'prop-types';
import LabelWrapper from './LabelWrapper';
import InnerLabel from './InnerLabel';
import LabelTitle from './LabelTitle';
import LabelBar from './LabelBar';

const Label = ({ active, onClick, children }) => (
  <LabelWrapper onClick={onClick}>
    <InnerLabel>
      <LabelTitle active={active}>
        {children}
      </LabelTitle>
      <LabelBar hidden={!active} />
    </InnerLabel>
  </LabelWrapper>
);

Label.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Label;
