import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../../colors';
import { transition } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const StyledDialog = styled('article')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
  padding: 32,
  width: 480,
  backgroundColor: white,
  boxSizing: 'border-box',
  borderRadius: 4,
  transition
}, ({ open, theme }) => {
  const styles = [];

  styles.push({
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize
  });

  if (open) return { transform: 'translate(-50%, -50%) scale(1)' };

  return styles;
});

StyledDialog.propTypes = {
  open: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

StyledDialog.defaultProps = {
  open: false
};

export default withTheme(StyledDialog);
