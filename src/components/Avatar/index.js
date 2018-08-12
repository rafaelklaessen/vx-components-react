import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { darkGrey, white } from '../../colors';
import withTheme from '../ThemeContext/withTheme';

const Avatar = styled('figure')({
  margin: 0,
  fontWeight: 300,
  borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
}, ({ src, color, contentColor, size, theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize * 1.2,
  color: contentColor,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundColor: color,
  backgroundImage: src ? `url('${src}')` : null,
  backgroundRepeat: 'no-repeat',
  width: size,
  height: size
}));

Avatar.propTypes = {
  src: PropTypes.string,
  color: PropTypes.string,
  contentColor: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  theme: PropTypes.object.isRequired
};

Avatar.defaultProps = {
  color: darkGrey,
  contentColor: white,
  size: 48
};

export default withTheme(Avatar);
