# Postcss-hocus <a href="https://github.com/postcss/postcss"><img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right"></a>

Postcss-hocus fixes a tiny but annoying part of CSS: That you have to repeat yourself whenever you want to specify both `:hover` and `:focus`. Instead, you write `a:hocus`:

```css
/* before */
a:hocus {
	color: red;
}

/* after */
a:hover,a:focus {
	color: red;
}
```
Additionally, you can write `a:pocus` to include the `:active` style:
```css
/* before */
a:pocus {
	color: red;
}

/* after */
a:hover,a:active,a:focus {
	color: red;
}
```
## Usage
Add postcss-hocus using npm:

```bash
npm install postcss-hocus --save-dev
```
Then add in your PostCSS Config:

```js
postcss([
	require('postcss-hocus')
]);
```
