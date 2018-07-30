import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../../colors';
import withTheme from '../../ThemeContext/withTheme';

const TabWrapper = styled('section')({
  padding: 24,
  backgroundColor: white
}, ({ visible, theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  display: visible ? 'block' : 'none'
}));

TabWrapper.propTypes = {
  visible: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired
};

export default withTheme(TabWrapper);
