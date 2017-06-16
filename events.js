// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var article = document.getElementById('article');
var getOutputDiv = document.getElementById('output-target');
	article.addEventListener("click",function()
	{
		var section = document.getElementsByClassName('article-section');
		getOutputDiv.innerHTML = `You clicked on ${event.target.innerHTML}`
	})

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

geth1 = document.getElementById('page-title')
geth1.addEventListener("mouseover",function()
{
	getOutputDiv.innerHTML = `you moved your mouse over the header`;
})
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
geth1.addEventListener("mouseleave",function()
{
	getOutputDiv.innerHTML = `you left me!`;
})

// When you type characters into the input field, the output element should mirror the text in the input field.
getInput = document.getElementById('keypress-input')
getInput.addEventListener("keydown", function()
{
	getOutputDiv.innerHTML += String.fromCharCode(event.keyCode);
})

var getdiv = document.getElementById('guinea-pig');

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", function()
{
	getdiv.classList.toggle("changeToBlue");
})
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener("click", function()
{
	getdiv.classList.toggle("large");
})

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener("click", function()
{
	getdiv.classList.toggle("border");
})
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener("click", function()
{
	getdiv.classList.toggle("rounded");
})
