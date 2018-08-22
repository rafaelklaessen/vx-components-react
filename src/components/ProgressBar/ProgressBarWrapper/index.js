import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { lightGrey } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const ProgressBarWrapper = styled('div')({
  position: 'relative',
  background: lightGrey,
  borderRadius: 100,
  overflow: 'hidden'
}, ({ backgroundColor, theme }) => ({
  height: theme.fontSize,
  backgroundColor
}));

ProgressBarWrapper.propTypes = {
  backgroundColor: PropTypes.string
};

ProgressBarWrapper.defaultProps = {
  backgroundColor: '#EEEEEE'
};

export default withTheme(ProgressBarWrapper);
