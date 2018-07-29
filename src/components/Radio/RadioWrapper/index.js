import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../../ThemeContext/withTheme';

const RadioWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center'
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

RadioWrapper.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(RadioWrapper);
