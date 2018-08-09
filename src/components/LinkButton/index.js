import styled from 'react-emotion';
import { transition } from '../../styles';
import Link from '../Link';

const StyledButton = styled('button')({
  padding: 0,
  background: 'none',
  font: 'inherit',
  border: 0,
  appearance: 'none',
  outlineWidth: 0,
  transition,
  ':hover': {
    textDecoration: 'none !important',
    opacity: .7
  }
});

const LinkButton = Link.asLink(StyledButton);

export default LinkButton;
