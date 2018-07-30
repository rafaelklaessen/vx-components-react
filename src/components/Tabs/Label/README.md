```js
initialState = { active: false };

<Label
  onClick={() => setState({ active: state.active })}
  active={state.active}
>
  Some label
</Label>
```
