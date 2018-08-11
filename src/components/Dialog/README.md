```js
initialState = { open: false };

const openModal = () => setState({ open: true });
const closeModal = () => setState({ open: false });

<div>
  <Button onClick={openModal}>
    Open dialog
  </Button>

  <Dialog open={state.open} onRequestClose={closeModal}>
    <Dialog.Label>Confirm deletion</Dialog.Label>
    <Dialog.Title>Delete this item?</Dialog.Title>
    <Dialog.Content>
      Once you delete an item, there&#39;s no way back!
    </Dialog.Content>
    <Dialog.Actions>
      <LinkButton onClick={closeModal}>
        Cancel
      </LinkButton>
      <Space width={24} />
      <Button onClick={closeModal} primary borderRadius={4}>
        Delete
      </Button>
    </Dialog.Actions>
  </Dialog>
</div>
```

Don't like the default look?
```js
const styled = require('react-emotion').default;

initialState = { open: false };

const openModal = () => setState({ open: true });
const closeModal = () => setState({ open: false });

const StyledDialog = styled(Dialog)({
  padding: 48,
  backgroundColor: 'seashell'
});

const StyledLabel = styled(Dialog.Label)({
  color: 'teal'
});

const StyledTitle = styled(Dialog.Title)({
  marginBottom: 6,
  color: 'pink',
  ':after': {
    content: '"??"'
  }
});

const StyledContent = styled(Dialog.Content)({
  padding: 4,
  color: 'green',
  backgroundColor: 'whitesmoke',
  borderRadius: 4
});

const StyledActions = styled(Dialog.Actions)({
  background: 'none'
});

<div>
  <Button onClick={openModal}>
    Open dialog
  </Button>

  <StyledDialog
    open={state.open}
    overlayProps={{ style: { backgroundColor: 'purple' } }}
    closeButtonProps={{ style: { fill: 'blue' } }}
    onRequestClose={closeModal}
  >
    <StyledLabel>Confirm deletion</StyledLabel>
    <StyledTitle>Delete this item?</StyledTitle>
    <StyledContent>
      Once you delete an item, there&#39;s no way back!
    </StyledContent>
    <StyledActions>
      <LinkButton onClick={closeModal}>
        Cancel
      </LinkButton>
      <Space width={24} />
      <Button onClick={closeModal} primary borderRadius={4}>
        Delete
      </Button>
    </StyledActions>
  </StyledDialog>
</div>
```
