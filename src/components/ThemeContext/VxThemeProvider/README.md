```js
<VxThemeProvider>
  This component sets the <Code>ThemeContext</Code> which is used by other components. Its use is not obligatory, but if you do use it, use it at the top level of your app.
  <br />
  <br />
  It also sets the <Code>font-family</Code> and <Code>font-size</Code>, thus rendering <Code>font.css</Code> useless.
</VxThemeProvider>
```

Note that the default title font family (used by `EnormousTitle`) relies on the `Montserrat` font.

Use this URL to get it: `https://fonts.googleapis.com/css?family=Montserrat:800`

### Customising the theme
The `theme` prop defaults to the following:
```js static
const defaultTheme = {
  primaryColor: '#FC2E1C',
  secondaryColor: '#999999',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontSize: 18,
  titleFontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
};
```

When you provide a `theme` prop, it's merged with `defaultTheme`.

Use it like this:
```js
<VxThemeProvider
  theme={{
    fontFamily: 'sans-serif',
    fontSize: 16,
    titleFontFamily: 'Comic Sans MS'
  }}
>
  Hello world!
  <EnormousTitle small>Foo Bar</EnormousTitle>
</VxThemeProvider>
```
