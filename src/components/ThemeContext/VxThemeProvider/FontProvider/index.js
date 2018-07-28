import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withTheme from '../../withTheme';

const FontProvider = styled('div')(({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

FontProvider.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(FontProvider);
