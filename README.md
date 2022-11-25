# TO-DO-LIST-APP
DOM
HTML webpage file is called a document. HTML documents are made up of lots of smaller pieces of HTML called HTML elements.


DOM methods and properties
1, document.
beginning of an instruction .
before using any of the dom's built in functions tell browser u want to access the api.
The DOM is a set of built-in functions that work with your web browser to make your page dynamic and change according to what the user does.
2, document.getElementById("container");
which dom function you want to use. the dom has built in functions called methods and properties that allow you to change html elements.
a method is an action you can do, such as adding or removing an html element.
a property is a value that you can access and change, such as setting the contents of an HTML element to a piece of text.


document.getElementById("container").innerHTML = "Item to remember";

Here the getElementById method is used to find a <div> using it’s id attribute. Then the innerHTML property is used to change the contents of the HTML element.

<div> tags
they are containers for pieces of content, and you can use them to divide your page into sections.


createElement and appendChild methods to add a new HTML element to your app. To do this you need to create a function that creates a new <div> and sets the innerHTML of that <div> to some text. Then use getElementById to find the new <div> and use appendChild to add another <div>. Then add an onclick to your first <div> that will call your function. So when the existing HTML element is clicked, a new HTML element will be added underneath it.

in the document object, all elements are connected like in a family tree.
any html element that is inside another is called a child of that element.the html element on the outside is called the parent.



how to add and remove more than one HTML element from your app. You need to code two functions: one for adding HTML elements and one for removing HTML elements from the app. Set up the onclick attribute in your function, so every new HTML element has an onclick attribute and then can be removed from the app when it is clicked.

localStorage
if we want our browser to save and remember our list we need to use localStorage,a handy API thats availablein html5
like DOM localStorage is a collection of functions.
this api lets u save information in your browser, so even if your page is refreshed or closed,you can still access the data.

how to use the localStorage API to store the information in your app in your web browser. Using localStorage allows you to save information in your web browser, so even if you app is closed or the page refreshed, you will still be able to access the up to date information.


using Local Storage, or storing information on the user’s web browser that we can access later. This information is stored as a set of key-value pairs, almost like a Python dictionary. In order to use local storage, we’ll employ two key functions:

localStorage.getItem(key): This function searches for an entry in local storage with a given key, and returns the value associated with that key.
localStorage.setItem(key, value): This function sets and entry in local storage, associating the key with a new vlaue.