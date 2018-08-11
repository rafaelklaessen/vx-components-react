import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../../ThemeContext/withTheme';

const DialogTitle = styled('h3')({
  marginTop: 0,
  marginBottom: 18,
  fontWeight: 900
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize * 1.1
}));

DialogTitle.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(DialogTitle);
