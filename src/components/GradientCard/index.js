import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../colors';
import GradientCardTitle from './CGradientardTitle';
import GradientCardContent from './GradientCardContent';
import withTheme from '../ThemeContext/withTheme';

// TODO: implement title & content, implement gradient prop, expose
// generateGradient function
const Card = styled('article')({
  padding: 12,
  color: white,
  backgroundColor: cardGrey,
  borderRadius: 14
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

Card.propTypes = {
  theme: PropTypes.object.isRequired
};

const ThemedCard = withTheme(Card);

ThemedCard.Title = GradientCardTitle;
ThemedCard.Content = GradientCardContent;

export default ThemedCard;
