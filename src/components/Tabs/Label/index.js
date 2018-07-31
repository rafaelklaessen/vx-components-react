import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ultraDarkGrey, black, lightGrey } from '../../../colors';
import { transition } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const Label = styled('h5')({
  margin: 0,
  paddingTop: 24,
  paddingBottom: 24,
  flex: 1,
  textAlign: 'center',
  color: ultraDarkGrey,
  fontWeight: 700,
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition
}, ({ active, theme }) => {
  const styles = [];

  styles.push({
    fontFamily: theme.fontFamily,
    fontSize: .78 * theme.fontSize
  });

  if (active) styles.push({
    color: black,
    backgroundColor: lightGrey
  });

  return styles;
});

Label.propTypes = {
  active: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Label.defaultProps = {
  active: false
};

export default withTheme(Label);
