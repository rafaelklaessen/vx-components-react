```js
<ExpansionPanel>
  <ExpansionPanel.Header>
    Privacy information
  </ExpansionPanel.Header>
  <ExpansionPanel.Content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Foo Bar.
  </ExpansionPanel.Content>
</ExpansionPanel>
```

With `defaultExpanded`:
```js
<ExpansionPanel defaultExpanded>
  <ExpansionPanel.Header>
    Privacy information
  </ExpansionPanel.Header>
  <ExpansionPanel.Content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Foo Bar.
  </ExpansionPanel.Content>
</ExpansionPanel>
```

Imperfect:
```js
<ExpansionPanel imperfect>
  <ExpansionPanel.Header>
    Privacy information
  </ExpansionPanel.Header>
  <ExpansionPanel.Content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Foo Bar.
  </ExpansionPanel.Content>
</ExpansionPanel>
```

Disabled:
```js
<ExpansionPanel disabled>
  <ExpansionPanel.Header>
    Privacy information
  </ExpansionPanel.Header>
  <ExpansionPanel.Content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Foo Bar.
  </ExpansionPanel.Content>
</ExpansionPanel>
```

Disabled & expanded:
```js
<ExpansionPanel defaultExpanded disabled>
  <ExpansionPanel.Header>
    Privacy information
  </ExpansionPanel.Header>
  <ExpansionPanel.Content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Foo Bar.
  </ExpansionPanel.Content>
</ExpansionPanel>
```

Controlled example:
```js
initialState = { expanded: true };

<ExpansionPanel
  expanded={state.expanded}
  onChange={expanded => setState({ expanded })}
>
  <ExpansionPanel.Header>
    Privacy information
  </ExpansionPanel.Header>
  <ExpansionPanel.Content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Foo Bar.
  </ExpansionPanel.Content>
</ExpansionPanel>
```

Note that the arrow button can be modified through the `arrowButtonProps` prop on `ExpansionPanel.Header`.
