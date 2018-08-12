import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black } from '../../../../colors';
import { transition } from '../../../../styles';
import withTheme from '../../../ThemeContext/withTheme';

const DeleteButtonWrapper = styled('button')({
  padding: 0,
  background: 'none',
  border: 0,
  cursor: 'pointer',
  appearance: 'none',
  outlineWidth: 0,
  transition
}, ({ color, hoverColor, theme }) => ({
  marginRight: -(theme.fontSize / 1.25 - 5),
  marginLeft: theme.fontSize / 2.5,
  width: (theme.fontSize * 2) - 10,
  height: (theme.fontSize * 2) - 10,
  fill: color,
  ':hover': {
    fill: hoverColor
  }
}));

DeleteButtonWrapper.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  theme: PropTypes.object.isRequired
};

DeleteButtonWrapper.defaultProps = {
  color: 'rgba(0, 0, 0, .35)',
  hoverColor: black
};

export default withTheme(DeleteButtonWrapper);
