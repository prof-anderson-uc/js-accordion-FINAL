// Find all elements with the class "accordion-button".
// This creates a list of all accordion buttons on the page.
var accordionButtons = document.querySelectorAll(".accordion-button");

// Loop through each accordion button in the list.
// The name "button" means the current button being worked on.
accordionButtons.forEach(function(button) {

  // When this button is clicked, run the function below.
  button.onclick = function() {

    // Find the element that comes right after the clicked button in the HTML.
    // In this accordion, that next element is the content panel.
    var content = this.nextElementSibling;

    // Add or remove the "open" class on the content panel.
    // If the class is already there, remove it.
    // If the class is not there, add it.
    content.classList.toggle("open");

    // Add or remove the "open" class on the button itself.
    // This is often used to rotate an arrow icon or change the button style.
    this.classList.toggle("open");

  };

});


/*
==================================================
DETAILED EXPLANATION
==================================================

This script makes an accordion interactive.

How it works:
1. The script finds every element with the class "accordion-button".
2. It stores those elements in a variable named accordionButtons.
3. It loops through that group of buttons one at a time.
4. Each button gets its own click event.
5. When a button is clicked:
   - the script finds the next element after that button
   - that next element is treated as the accordion content panel
   - the script toggles the class "open" on the content panel
   - the script also toggles the class "open" on the button itself

Why use querySelectorAll()?
querySelectorAll() lets JavaScript find every element on the page that matches a CSS selector.
In this case, it finds all elements with the class "accordion-button".

Why use accordionButtons as the variable name?
This variable stores a whole group of buttons, not just one button.
Using a more descriptive plural name helps make that clearer for beginners.

Why use forEach()?
forEach() loops through each item in a list.
Here, it lets us go through each accordion button and attach the same click behavior to all of them.

What does function(button) mean?
This creates a function that runs once for each item in the accordionButtons list.
The word "button" is a parameter name. It represents one accordion button at a time as the loop moves through the list.

Why use onclick?
onclick assigns a function that runs when the user clicks the button.

Why use this?
Inside the click function, "this" refers to the specific button that was clicked.
That means the code can work with whichever accordion button the user selects.

Why use nextElementSibling?
The script assumes the accordion content panel comes immediately after the button in the HTML.
So if the structure looks like this:

<button class="accordion-button">Question 1</button>
<div class="accordion-content">Answer 1</div>

then nextElementSibling finds the <div> after the button.

Why use classList.toggle()?
toggle() is a handy method for switching a class on and off.

If the class already exists:
- toggle() removes it

If the class does not exist:
- toggle() adds it

This is useful for accordion behavior because the same click can both open and close the panel.

Why add the "open" class to both the content and the button?
The content panel needs the "open" class so CSS can show or hide it.
The button may also need the "open" class so CSS can change its appearance,
such as rotating an arrow or changing the background color.

Is it okay to write function(button) without a space?
Yes. JavaScript allows both styles:
- function(button)
- function (button)

They work the same way.
This version uses function(button) to stay consistent with earlier class examples.

==================================================
GLOSSARY OF TERMS
==================================================

document:
Represents the entire web page.

querySelectorAll():
Finds all elements that match a CSS selector.

".accordion-button":
A CSS class selector.
It means "find every element with the class accordion-button".

NodeList:
The type of list returned by querySelectorAll().
It is a collection of matching elements.

forEach():
Loops through each item in a list one at a time.

function(button):
A function that runs once for each item in the list.
The parameter name "button" represents the current accordion button being worked on.

function():
A function with no named parameter.
In this script, it is used for the click event.

onclick:
An event property that runs code when an element is clicked.

this:
Refers to the specific element that triggered the event.
In this script, it means the clicked accordion button.

nextElementSibling:
Finds the next HTML element after the current one.

classList:
An object that lets JavaScript work with an element's CSS classes.

toggle():
Adds a class if it is missing, or removes it if it is already there.

"open":
A CSS class name used to control styling or visibility.

==================================================
VARIABLE LIST
==================================================

accordionButtons:
Stores all elements with the class "accordion-button".

button:
Represents one accordion button at a time inside the forEach() loop.

content:
Stores the element that comes right after the clicked button.
This is the accordion content panel that opens and closes.
*/

