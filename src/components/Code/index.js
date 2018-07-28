import styled from 'react-emotion';
import { black, lightGrey } from '../../colors';

const Code = styled('code')({
  padding: `3.2px 4.8px`,
  lineHeight: 1.8,
  color: black,
  backgroundColor: lightGrey,
  fontSize: 14,
  fontFamily: '"Menlo", monospace',
  fontWeight: 700
});

export default Code;
