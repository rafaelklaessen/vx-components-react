import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../../ThemeContext/withTheme';

const DialogActions = styled('footer')({
  margin: -32,
  marginTop: 32,
  paddingTop: 18,
  paddingBottom: 18,
  paddingLeft: 32,
  paddingRight: 32,
  textAlign: 'right',
  backgroundColor: '#F2F2F2',
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

DialogActions.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(DialogActions);
