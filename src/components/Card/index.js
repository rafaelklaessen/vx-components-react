import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black, cardGrey } from '../../colors';
import CardTitle from './CardTitle';
import CardContent from './CardContent';
import withTheme from '../ThemeContext/withTheme';

const Card = styled('article')({
  padding: 12,
  color: black,
  backgroundColor: cardGrey
}, ({ theme }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize
}));

Card.propTypes = {
  theme: PropTypes.object.isRequired
};

const ThemedCard = withTheme(Card);

ThemedCard.Title = CardTitle;
ThemedCard.Content = CardContent;

export default ThemedCard;
