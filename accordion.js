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
