import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';
import withTheme from '../../ThemeContext/withTheme';

const bounce = keyframes`
  0% {
    left: 0;
    width: 30%;
  }

  25% {
    width: 40%
  }

  50% {
    left: 70%;
    width: 30%;
  }

  75% {
    width: 40%;
  }

  100% {
    left: 0;
    width: 30%;
  }
`;

const ProgressBarFill = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius: 100
}, ({ color, value, indeterminate, theme }) => {
  const styles = [];

  styles.push({
    height: theme.fontSize,
    backgroundColor: color || theme.primaryColor
  });

  if (!indeterminate) {
    styles.push({
      width: `${value}%`
    });
  }

  if (indeterminate) {
    styles.push({
      animation: `${bounce} 4s ease infinite`
    });
  }

  return styles;
});

ProgressBarFill.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  value: PropTypes.number,
  indeterminate: PropTypes.bool
};

ProgressBarFill.defaultProps = {
  value: 0,
  indeterminate: false
};

export default withTheme(ProgressBarFill);
