import styled from 'react-emotion';

const PlaceholderWrapper = styled('div')({
  marginRight: 12,
  flex: 1,
  maxWidth: 'calc(100% - 36px)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

export default PlaceholderWrapper;
