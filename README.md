# JavaScript Accordion

## Overview

This project demonstrates how JavaScript can be used to create an **accordion**, a common user interface pattern where hidden content is revealed or concealed when the user clicks a heading or button.

In this example, each accordion button controls the content panel immediately below it. When a button is clicked, JavaScript adds or removes a CSS class, and CSS handles the animation that opens or closes the panel.

This exercise is important because it shows how **HTML, CSS, and JavaScript work together**:

- **HTML** provides the structure of the accordion
- **CSS** controls the visual appearance and animation
- **JavaScript** controls the behavior and user interaction

This project also demonstrates a more modern approach to interactive web design than older scripts that directly changed many style properties with JavaScript. In this version, JavaScript simply toggles a class, and CSS handles the animation.

---

## Learning Goals

By completing this exercise, you should understand how to:

- Build a basic accordion interface in HTML
- Use JavaScript to select multiple elements on a page
- Loop through selected elements with `forEach()`
- Attach a click action to each accordion button
- Use `nextElementSibling` to find a related HTML element
- Toggle a CSS class with `classList.toggle()`
- Use CSS transitions to animate changes in the interface
- Understand how behavior and presentation can be separated between JavaScript and CSS

---

## What This Project Does

When the page loads, the accordion buttons are visible, but the content panels are hidden.

When the user clicks an accordion button:

1. JavaScript detects the click
2. JavaScript finds the content panel directly below the button
3. JavaScript toggles the class `open` on that content panel
4. CSS responds by animating the panel open or closed
5. JavaScript also toggles the class `open` on the button itself
6. CSS rotates the arrow inside the button to show that the section is open

The result is an interactive accordion component with animated opening and closing behavior.

---

## Files in This Project

### `index.html`

This file contains the structure of the accordion.

It includes:

- the page heading
- explanatory text
- the accordion buttons
- the content panels
- the arrow icons
- the link to the CSS files
- the link to the JavaScript file

---

### `styles.css`

This file controls the visual appearance of the page.

It includes styles for:

- the page background
- the main wrapper box
- the accordion buttons
- the accordion content panels
- the arrow icon
- the transition and animation behavior

---

### `reset.css`

Browsers apply their own default styles to many HTML elements.  
A reset stylesheet removes or reduces those default styles so the page behaves more consistently across different browsers.

---

### `accordion.js`

This file contains the JavaScript that powers the accordion.

It includes:

- code to select all accordion buttons
- a loop that processes each button
- a click handler for each button
- code that finds the related content panel
- code that toggles classes on the content and button

---

## The HTML Structure

The accordion is built using a repeating pattern.

Each section contains:

1. a button
2. a content panel immediately below it

Example:

```html
<button class="accordion-button">
  <span class="accordion-arrow">▸</span>
  Cat Facts
</button>

<div class="accordion-content">
  <p>Cats sleep about 16 hours a day.</p>
</div>
```

This structure is important because the JavaScript depends on it.

The button comes first, and the content panel comes directly after it.

That allows JavaScript to use:

```javascript
this.nextElementSibling
```

to find the correct panel.

---

## Why the Accordion Uses `<button>`

The clickable headings in this project use the HTML `<button>` element.

This is the correct semantic choice because clicking the heading performs an **action** on the current page. It does not navigate to another page or URL.

A useful rule to remember:

- Use `<a>` for **navigation**
- Use `<button>` for **actions**

In this project, clicking the accordion heading opens or closes content, so `<button>` is the appropriate element.

---

## Why the JavaScript File Uses `defer`

The HTML loads the JavaScript file like this:

```html
<script src="accordion.js" defer></script>
```

The `defer` attribute tells the browser:

- download the script file now
- but wait until the HTML has finished loading before running it

This matters because the JavaScript needs to find elements already present on the page. If the script ran too early, those elements might not exist yet.

---

## The JavaScript Code

Here is the complete script:

```javascript
// find all accordion buttons
var buttons = document.querySelectorAll(".accordion-button");

// loop through each button
buttons.forEach(function(button){

  button.onclick = function(){

    // find the content that comes after the button
    var content = this.nextElementSibling;

    // toggle the open class on the content
    content.classList.toggle("open");

    // rotate the arrow
    this.classList.toggle("open");
  };

});
```

---

## Step-by-Step JavaScript Breakdown

### Step 1: Select All Accordion Buttons

```javascript
var buttons = document.querySelectorAll(".accordion-button");
```

This line finds **all elements** on the page with the class `accordion-button`.

Because the page contains multiple accordion buttons, we cannot use `getElementById()`. IDs are meant for one unique element, but here we want a **group** of elements.

`document.querySelectorAll()` returns a list of matching elements.

So after this line runs, the variable `buttons` contains all of the accordion buttons on the page.

---

### Step 2: Loop Through the Buttons

```javascript
buttons.forEach(function(button){
```

This line loops through each button in the list.

The `forEach()` method allows us to perform the same action on every item in a group.

In this case:

- first it works with the first button
- then the second button
- then the third button
- and so on

The name `button` inside the loop refers to the current button being processed.

---

### Step 3: Attach a Click Action to Each Button

```javascript
button.onclick = function(){
```

This line tells JavaScript:

> When this button is clicked, run the following function.

This means each accordion button receives its own click behavior.

When the user clicks one button, only that button’s function runs.

---

### Step 4: Find the Related Content Panel

```javascript
var content = this.nextElementSibling;
```

This line finds the content panel that belongs to the button that was clicked.

The keyword `this` refers to the specific button the user clicked.

`nextElementSibling` means:

> Find the next HTML element directly after this one.

Because the HTML is structured as:

```html
<button class="accordion-button">...</button>
<div class="accordion-content">...</div>
```

the content panel is the next element after the button.

So this line finds the correct accordion panel without needing unique IDs for each section.

---

### Step 5: Toggle the `open` Class on the Content Panel

```javascript
content.classList.toggle("open");
```

This line adds the class `open` if it is missing, or removes it if it is already there.

That means:

- if the accordion is closed, it opens
- if the accordion is open, it closes

JavaScript is not directly animating anything here. It is only adding or removing a class.

CSS handles the animation.

---

### Step 6: Toggle the `open` Class on the Button

```javascript
this.classList.toggle("open");
```

This line adds or removes the class `open` on the button itself.

That class is used by CSS to rotate the arrow inside the button.

So JavaScript is toggling two things:

1. the content panel
2. the button

The content panel uses the class to animate open or closed.  
The button uses the class to rotate the arrow.

---

## The CSS Animation

The accordion animation is created with CSS.

### Closed State

```css
.accordion-content{
  max-height:0;
  overflow:hidden;
  background:#f7f7f7;
  padding:0 1rem;
  transition:max-height .4s ease;
}
```

In the closed state:

- the content panel has `max-height: 0`
- anything larger than that is hidden
- the panel appears closed

---

### Open State

```css
.accordion-content.open{
  max-height:200px;
  padding:1rem;
}
```

When the class `open` is added:

- the panel’s maximum height becomes larger
- the browser animates the height change
- the accordion appears to slide open

Because of the `transition` property in the closed state, the browser animates the change smoothly.

---

## The Arrow Rotation

The arrow inside the button is a simple `<span>`:

```html
<span class="accordion-arrow">▸</span>
```

The CSS for the arrow is:

```css
.accordion-arrow{
  display:inline-block;
  margin-right:.5rem;
  transition: transform .3s ease;
}
```

This makes the arrow able to rotate smoothly.

When the button has the class `open`, this rule applies:

```css
.accordion-button.open .accordion-arrow{
  transform:rotate(90deg);
}
```

That rotates the arrow 90 degrees.

So the arrow visually indicates whether the section is open or closed.

---

## Why This Is a Modern Approach

Older scripts often changed many style properties directly with JavaScript.

This project uses a more modern and maintainable method:

- JavaScript controls **behavior**
- CSS controls **presentation**

JavaScript says:

> Open or close this section.

CSS says:

> Here is what opening or closing should look like.

This separation makes the code easier to understand, easier to maintain, and more flexible.

---

## The Flow of the Program

Here is the full sequence of what happens:

1. The browser loads the HTML and builds the page
2. The browser loads the CSS and applies the styles
3. The browser loads the JavaScript file after the HTML is ready
4. JavaScript selects all accordion buttons
5. JavaScript loops through those buttons
6. JavaScript attaches a click function to each button
7. The user clicks an accordion button
8. JavaScript finds the content panel below that button
9. JavaScript toggles the class `open` on the content panel
10. JavaScript toggles the class `open` on the button
11. CSS animates the content panel
12. CSS rotates the arrow

This is a strong example of how interactive interfaces work in web development.

---

## Variables Used in This Project

### `buttons`

```javascript
var buttons = document.querySelectorAll(".accordion-button");
```

This variable stores the list of all accordion buttons on the page.

---

### `button`

```javascript
buttons.forEach(function(button){
```

Inside the loop, `button` refers to the current button being processed.

---

### `content`

```javascript
var content = this.nextElementSibling;
```

This variable stores the accordion content panel related to the clicked button.

---

## Functions and Methods Used in This Project

### `document.querySelectorAll()`

Used to select all elements that match a CSS selector.

Example:

```javascript
document.querySelectorAll(".accordion-button")
```

This returns all elements with the class `accordion-button`.

---

### `forEach()`

Used to loop through each item in a list.

Example:

```javascript
buttons.forEach(function(button){
```

This runs the function once for each button.

---

### `onclick`

Used to run a function when an element is clicked.

Example:

```javascript
button.onclick = function(){
```

This means the function runs when the user clicks the button.

---

### `nextElementSibling`

Used to find the next HTML element immediately after the current one.

Example:

```javascript
this.nextElementSibling
```

This works because each accordion content panel comes directly after its button in the HTML.

---

### `classList.toggle()`

Used to add or remove a class.

Example:

```javascript
content.classList.toggle("open");
```

If the class is missing, it is added.  
If the class is already present, it is removed.

---

## Common Mistakes

### The JavaScript file is not linked correctly

Make sure the HTML includes:

```html
<script src="accordion.js" defer></script>
```

If the filename is wrong, the script will not load.

---

### The button and content are not in the correct order

The script depends on this pattern:

```html
<button class="accordion-button">...</button>
<div class="accordion-content">...</div>
```

If the content panel is not directly after the button, `nextElementSibling` will not find the correct element.

---

### The class names do not match

If the HTML uses different class names than the JavaScript or CSS expects, the accordion will fail.

These class names must match exactly:

- `accordion-button`
- `accordion-content`
- `accordion-arrow`
- `open`

---

### The CSS `open` class is missing

If the CSS rule for `.accordion-content.open` is missing or incorrect, the content will not animate properly.

---

## Things to Try

Once the basic version works, experiment with it.

### Add more accordion sections

Create additional buttons and content panels.

The JavaScript will automatically work for them as long as the structure stays the same.

---

### Change the content

Replace the cat facts with:

- FAQ questions and answers
- movie trivia
- course tips
- favorite foods
- design advice

---

### Change the arrow character

Try a different arrow or symbol.

For example:

- `▷`
- `❯`
- `+`
- `👉`

---

### Change the animation speed

Adjust the CSS transition:

```css
transition:max-height .4s ease;
```

Try slower or faster values.

---

### Change the accordion colors

Update the background colors to make the accordion match a different design style.

---

## Why This Exercise Matters

This project introduces an important pattern used all over the web:

1. select elements
2. respond to user interaction
3. change classes
4. let CSS update the interface

That same pattern appears in:

- accordions
- tabs
- dropdowns
- modals
- menus
- interactive navigation
- show/hide content panels

Understanding this pattern will make it much easier to build interactive web features later.

---

## Glossary

**Accordion**  
A user interface pattern where clicking a heading reveals or hides content.

**Class**  
A reusable label applied to HTML elements so they can be styled with CSS or selected with JavaScript.

**CSS Transition**  
A CSS feature that animates a change between one state and another.

**`classList`**  
A JavaScript property that provides methods for working with an element’s classes.

**`classList.toggle()`**  
A JavaScript method that adds a class if it is missing or removes it if it is present.

**`defer`**  
An attribute on a `<script>` tag that tells the browser to wait until the HTML has loaded before running the script.

**DOM**  
The Document Object Model. JavaScript’s representation of the webpage.

**Element**  
A single HTML item such as a `<button>`, `<div>`, or `<p>`.

**Event**  
An action JavaScript can detect, such as a click.

**Function**  
A block of code that performs a task when it is called.

**`forEach()`**  
A method used to loop through every item in a list.

**`nextElementSibling`**  
A JavaScript property that finds the next HTML element immediately after the current one.

**Node List**  
A list of elements returned by methods such as `querySelectorAll()`.

**`onclick`**  
An event handler that runs code when an element is clicked.

**Open State**  
The version of the accordion when its content is visible.

**Closed State**  
The version of the accordion when its content is hidden.

**`querySelectorAll()`**  
A JavaScript method used to select all elements that match a CSS selector.

**Semantic HTML**  
Using HTML elements for their intended purpose, such as `<button>` for actions.

**Variable**  
A named container used to store a value in JavaScript.
