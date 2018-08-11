import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../../ThemeContext/withTheme';

const DialogContent = styled('div')({
  boxSizing: 'border-box'
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

DialogContent.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(DialogContent);
