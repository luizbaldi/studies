# CSS Grid Cheatsheet

Just placing random notes based on the progress made on the course :)

---

Enable an element to display children as grid

```css
display: grid;
```

Specifies the amount and size of columns

```css
grid-template-columns: 80px auto 150px;
```

Specifies the size of rows

```css
grid-template-rows: 100px 200px;
```

Specifies the size of implicit rows

```css
grid-auto-rows: 120px; auto;
```

Specifies the size of implicit columns (use with `grid-auto-flow: column;`)

```css
grid-auto-columns: 200px auto;
```

Controls how auto-placed elements are going to be displayed (reminds me of flexbox `flex-direction`)

```css
grid-auto-flow: column;
```

Use the `fr` unit to take the fraction of the available space

```css
grid-template-columns: 200px 1fr;
```

Make the element occupy more than one column or row

```css
grid-column: span 2;
grid-row: span 2;
```

Use grid-column to also determine where the element should start and end

```css
grid-column: 1 / -1; /* start on the first column and ends at the final one */
```

The line above is equal to

```css
grid-column-start: 1;
grid-column-end: -1;
```
