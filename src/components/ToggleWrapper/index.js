import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../ThemeContext/withTheme';

const ToggleWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center'
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

ToggleWrapper.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(ToggleWrapper);
