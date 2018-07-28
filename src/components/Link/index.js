import PropTypes from 'prop-types';
import withTheme from '../ThemeContext/withTheme';
import styled from 'react-emotion';

const generateLink = (Component) => {
  const Styled = styled(Component)({
    fontWeight: 700,
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline'
    },
    ':active': {
      opacity: .7
    }
  }, ({ theme }) => ({
    color: theme.primaryColor,
    fontFamily: theme.fontFamily
  }));

  Styled.propTypes = {
    theme: PropTypes.object.isRequired
  };

  return Styled;
};

export const asLink = Component => withTheme(generateLink(Component));

const DefaultLink = asLink('a');

DefaultLink.asLink = asLink;

export default DefaultLink;
