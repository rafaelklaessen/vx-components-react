```js
<Chip>
  react-component-library
</Chip>

<Space width={12} />

<Chip color="#FFD54F">
  react-component-library
</Chip>

<Space width={12} />

<Chip color="#4A148C" contentColor="#FFFFFF">
  react-component-library
</Chip>
```

Clickable chip:
```js
<Chip onClick={() => console.log('[Chip]: Click!')}>
  vx-components
</Chip>
```

With a delete button:
```js
<Chip>
  component-library
  <Chip.DeleteButton onClick={() => console.log('[Chip] Delete!')} />
</Chip>

<Space width={12} />

<Chip color="#FFD54F">
  react-component-library
  <Chip.DeleteButton onClick={() => console.log('[Chip] Delete!')} />
</Chip>

<Space width={12} />

<Chip color="#4A148C" contentColor="#FFFFFF">
  component-library
  <Chip.DeleteButton
    color="rgba(255, 255, 255, .7)"
    hoverColor="#FFFFFF"
    onClick={() => console.log('[Chip] Delete!')}
  />
</Chip>
```
