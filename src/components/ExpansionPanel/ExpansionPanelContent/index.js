import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { cardGrey } from '../../../colors';
import { transition } from '../../../styles';
import withTheme from '../../ThemeContext/withTheme';

const ExpansionPanelContent = styled('section')({
  paddingLeft: 36,
  paddingRight: 36,
  backgroundColor: cardGrey,
  borderBottomLeftRadius: 14,
  borderBottomRightRadius: 14,
  boxSizing: 'border-box',
  transition
}, ({ expanded, disabled, theme }) => {
  const styles = [];

  styles.push({
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily
  });

  styles.push({
    paddingTop: expanded ? 36 : 0,
    paddingBottom: expanded ? 36 : 0,
    height: expanded ? 'auto' : 0,
    opacity: expanded ? 1 : 0
  });

  if (disabled) styles.push({
    cursor: 'not-allowed',
    opacity: expanded ? .5 : 0
  });

  return styles;
});

ExpansionPanelContent.propTypes = {
  expanded: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

ExpansionPanelContent.defaultProps = {
  expanded: false,
  disabled: false
};

export default withTheme(ExpansionPanelContent);
