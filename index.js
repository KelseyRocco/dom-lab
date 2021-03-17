//Sorry if keeping the  instructions in is annoying, I just wanted to be able to refer back to each step without going into class notes when reviewing it later during class//


//Part ONE
// Menu data structure
const menuLinks = [
{text: 'about', href: '/about'},
{text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
]},
{text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
]},
{text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
]},
];

/*Task 1.0
Select and cache the <main> element in a variable named mainEl.*/

var mainEl = document.querySelector("main");

/*Task 1.1
Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

Hint: Assign a string that uses the CSS var() function like this:
'var(--main-bg)'*/
mainEl.style.backgroundColor = "var(--main-bg)";


/*Task 1.2
Set the content of mainEl to <h1>SEI Rocks!</h1>.*/
/*
const para = document.createElement("h1");//create h1 in document
const node = document.createTextNode("SEI Rocks!");//create text inside h1
para.appendChild(node); //put text inside h1

mainEl.appendChild(para);//add h1 w text to mainEl*/

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"


//Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");


/* Task 2.0
Select and cache the <nav id="top-menu"> element in a variable named topMenuEl. */
var topMenuEl = document.getElementById("top-menu");

/*Task 2.1
Set the height topMenuEl element to be 100%. */
topMenuEl.style.height ="100%";

/*Task 2.2
Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.*/
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

/*Task 2.3
Add a class of flex-around to topMenuEl. */
topMenuEl.classList.add("flex-around");


//Task 3.0

menuLinks.forEach(function(link) {
var linkEl = document.createElement("a");
linkEl.setAttribute("href", link.href);
linkEl.textContent = link.text;
topMenuEl.appendChild(linkEl);
});

//Part TWO

/*Task 4.0
Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.*/
var subMenuEl = document.getElementById("sub-menu");

/*Task 4.1
Set the height subMenuEl element to be 100%.*/
subMenuEl.style.height ="100%";

/*Task 4.2
Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.*/

subMenuEl.style.background = "var(--sub-menu-bg)";

/* Task 4.3
Add the class of flex-around to the subMenuEl element.*/
subMenuEl.classList.add = ("flex-around")

/*Task 4.4
Set the CSS position property of subMenuEl to the value of absolute. */
subMenuEl.style.position = "absolute";

/*Task 4.5
Set the CSS top property of subMenuEl to the value of 0.*/
subMenuEl.style.top = "0";

/*Task 5.1
Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

Declare a global showingSubMenu variable and initialize it to false; */

var topMenuLinks = document.querySelectorAll('#top-menu a');
var showingSubMenu = false;
/*Task 5.2
Attach a delegated 'click' event listener to topMenuEl.

The first line of code of the event listener function should call the event object's preventDefault() method.

The second line of code function should immediately return if the element clicked was not an <a> element.

console.log the content of the <a> to verify the handler is working. */

topMenuEl.addEventListener("click", evt){
evt.preventDefault();

}

//This is all I was able to get completed at time of hand in - am going to continue to work on tomorrow as well as TA meeting on Thursday. Sorry!//