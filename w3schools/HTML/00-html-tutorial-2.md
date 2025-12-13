# HTML Tutorial

## HTML Lists

### HTML Lists

HTML lists allow web developers to group a set of related items in lists.

#### Unordered HTML List

An unordered list starts with the ```<ul>``` tag. Each list item starts with the ```<li>``` tag.

```HTML
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

#### Ordered HTML List

An ordered list starts with the ```<ol>``` tag. Each list item starts with the ```<li>``` tag.

```HTML
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

#### HTML Description Lists

HTML also supports description lists.

A description list is a list of terms, with a description of each term.

The ```<dl>``` tag defines the description list, the ```<dt>``` tag defines the term (name), and the ```<dd>``` tag describes each term:

```HTML
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

#### HTML List Tags

- ```<ul>```	Defines an unordered list
- ```<ol>```	Defines an ordered list
- ```<li>```	Defines a list item
- ```<dl>```	Defines a description list
- ```<dt>```	Defines a term in a description list
- ```<dd>```	Describes the term in a description list

[HTML - Lists - W3Schools.com](https://www.youtube.com/watch?v=-QuK8taGLCs&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=17)

### HTML Unordered Lists

The HTML ```<ul>``` tag defines an unordered (bulleted) list.

#### Unordered HTML List - Choose List Item Marker

The CSS ```list-style-type``` property is used to define the style of the list item marker. It can have one of the following values:

- ```disc```	Sets the list item marker to a bullet (default)
- ```circle```	Sets the list item marker to a circle
- ```square```	Sets the list item marker to a square
- ```none```	The list items will not be marked

#### Nested HTML Lists

```HTML
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```

#### Horizontal List with CSS

HTML lists can be styled in many different ways with CSS.

One popular way is to style a list horizontally, to create a navigation menu:

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
</head>
<body>

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

</body>
</html>
```

#### Chapter Summary

- Use the HTML ```<ul>``` element to define an unordered list
- Use the CSS ```list-style-type``` property to define the list item marker
- Use the HTML ```<li>``` element to define a list item
- Lists can be nested
- List items can contain other HTML elements
- Use the CSS property ```float:left``` to display a list horizontally

#### HTML List Tags

- ```<ul>```	Defines an unordered list
- ```<ol>```	Defines an ordered list
- ```<li>```	Defines a list item
- ```<dl>```	Defines a description list
- ```<dt>```	Defines a term in a description list
- ```<dd>```	Describes the term in a description list

### HTML Ordered Lists

The HTML ```<ol>``` tag defines an ordered list. An ordered list can be numerical or alphabetical.

#### Ordered HTML List - The Type Attribute

- ```type="1"```	The list items will be numbered with numbers (default)
- ```type="A"```	The list items will be numbered with uppercase letters
- ```type="a"```	The list items will be numbered with lowercase letters
- ```type="I"```	The list items will be numbered with uppercase roman numbers
- ```type="i"```	The list items will be numbered with lowercase roman numbers

```HTML
<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

#### Chapter Summary

- Use the HTML ```<ol>``` element to define an ordered list
- Use the HTML ```type``` attribute to define the numbering type
- Use the HTML ```<li>``` element to define a list item
- Lists can be nested
- List items can contain other HTML elements

### HTML Other Lists

HTML also supports description lists.

#### HTML Description Lists

A description list is a list of terms, with a description of each term.

The ```<dl>``` tag defines the description list, the ```<dt>``` tag defines the term (name), and the ```<dd>``` tag describes each term:

```HTML
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

#### Chapter Summary

- Use the HTML ```<dl>``` element to define a description list
- Use the HTML ```<dt>``` element to define the description term
- Use the HTML ```<dd>``` element to describe the term in a description list

## HTML Block and Inline Elements

Every HTML element has a default display value, depending on what type of element it is.

The two most common display values are **block** and **inline**.

### Block-level Elements

A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.

A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Two commonly used block elements are: ```<p>``` and ```<div>```.

The ```<p>``` element defines a paragraph in an HTML document.

The ```<div>``` element defines a division or a section in an HTML document.

Here are the block-level elements in HTML:

- ```<address>``` – Defines contact information for the author/owner
- ```<article>``` – Represents independent, self-contained content
- ```<aside>``` – Defines content aside from the main content (like a sidebar)
- ```<blockquote>``` – Indicates a section that is quoted from another source
- ```<canvas>``` – Used to draw graphics via scripting (like JavaScript)
- ```<dd>``` – Describes a term in a description list
- ```<div>``` – Generic container for flow content
- ```<dl>``` – Defines a description list
- ```<dt>``` – Defines a term in a description list
- ```<fieldset>``` – Groups related elements in a form
- ```<figcaption>``` – Caption for a ```<figure>``` element
- ```<figure>``` – Specifies self-contained content, like illustrations
- ```<footer>``` – Defines a footer for a section or page
- ```<form>``` – Used to collect user input
- ```<h1>-<h6>``` – Define HTML headings, from most to least important
- ```<header>``` – Represents introductory content or navigation links
- ```<hr>``` – Inserts a thematic break (horizontal rule)
- ```<li>``` – Defines a list item
- ```<main>``` – Specifies the main content of a document
- ```<nav>``` – Defines navigation links
- ```<noscript>``` – Provides alternate content for users without scripts
- ```<ol>``` – Defines an ordered list
- ```<p>``` – Represents a paragraph
- ```<pre>``` – Displays preformatted text
- ```<section>``` – Defines a section in a document
- ```<table>``` – Represents tabular data
- ```<tfoot>``` – Groups footer content in a table
- ```<ul>``` – Defines an unordered list
- ```<video>``` – Embeds video content

### Inline Elements

An inline element *does not start on a new line*.

An inline element only takes up as much width as necessary.

Here are the inline elements in HTML:

- ```<a>``` – Defines a hyperlink
- ```<abbr>``` – Represents an abbreviation or acronym
- ```<acronym>``` – Specifies an acronym (not supported in HTML5)
- ```<b>``` – Makes text bold without extra importance
- ```<bdo>``` – Overrides the current text direction
- ```<big>``` – Makes text larger (not supported in HTML5)
- ```<br>``` – Inserts a single line break
- ```<button>``` – Defines a clickable button
- ```<cite>``` – Cites a creative work (e.g., book, article)
- ```<code>``` – Displays a piece of computer code
- ```<dfn>``` – Indicates a definition term
- ```<em>``` – Emphasizes text (usually italic)
- ```<i>``` – Italicizes text without extra importance
- ```<img>``` – Embeds an image
- ```<input>``` – Accepts user input in a form
- ```<kbd>``` – Represents keyboard input
- ```<label>``` – Labels a form control
- ```<map>``` – Defines an image map
- ```<object>``` – Embeds external content (e.g., multimedia)
- ```<output>``` – Displays the result of a calculation
- ```<q>``` – Defines a short inline quotation
- ```<samp>``` – Represents sample output from a program
- ```<script>``` – Embeds or references executable script
- ```<select>``` – Creates a drop-down list
- ```<small>``` – Decreases text size
- ```<span>``` – Generic inline container for styling
- ```<strong>``` – Indicates strong importance (usually bold)
- ```<sub>``` – Subscript text
- ```<sup>``` – Superscript text
- ```<textarea>``` – Multi-line text input control
- ```<time>``` – Represents a specific time or date
- ```<tt>``` – Teletype text (not supported in HTML5)
- ```<var>``` – Defines a variable in programming or math

### The ```<div>``` Element

The ```<div>``` element is often used as a container for other HTML elements.

The ```<div>``` element has no required attributes, but ```style```, ```class``` and ```id``` are common.

When used together with CSS, the ```<div>``` element can be used to style blocks of content:

```HTML
<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</div>
```

### The ```<span>``` Element

The ```<span>``` element is an inline container used to mark up a part of a text, or a part of a document.

The ```<span>``` element has no required attributes, but ```style```, ```class``` and ```id``` are common.

When used together with CSS, the ```<span>``` element can be used to style parts of the text:

```HTML
<p>My mother has <span style="color:blue;font-weight:bold;">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold;">dark green</span> eyes.</p>
```

### Chapter Summary

- A block-level element always starts on a new line and takes up the full width available
- An inline element does not start on a new line and it only takes up as much width as necessary
- The ```<div>``` element is a block-level element and is often used as a container for other HTML elements
- The ```<span>``` element is an inline container used to mark up a part of a text, or a part of a document

### HTML Tags

- ```<div>```	Defines a section in a document (block-level)
- ```<span>```	Defines a section in a document (inline)

[HTML - Block and Inline - W3Schools.com](https://www.youtube.com/watch?v=M4n-WSkehmI&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=16)

## HTML Div Element

The ```<div>``` element is used as a container for other HTML elements.

### The ```<div>``` Element

The ```<div>``` element has no required attributes, but ```style```, ```class``` and ```id``` are common.

### ```<div>``` as a container

The ```<div>``` element is often used to group sections of a web page together.

```HTML
<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>
```

### Center align a ```<div>``` element

If you have a ```<div>``` element that is not 100% wide, and you want to center-align it, set the CSS ```margin``` property to ```auto```.

```HTML
<style>
div {
  width:300px;
  margin:auto;
}
</style>
```

### Multiple <div> elements

You can have many ```<div>``` containers on the same page.

```HTML
<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>

<div>
  <h2>Oslo</h2>
  <p>Oslo is the capital city of Norway.</p>
  <p>Oslo has over 700,000 inhabitants.</p>
</div>

<div>
  <h2>Rome</h2>
  <p>Rome is the capital city of Italy.</p>
  <p>Rome has over 4 million inhabitants.</p>
</div>
```

### Aligning <div> elements side by side

There are different methods for aligning elements side by side, all include some CSS styling. We will look at the most common methods:

#### Float

The CSS ```float``` property was not originally meant to align ```<div>``` elements side-by-side, but has been used for this purpose for many years.

The CSS ```float``` property is used for positioning and formatting content and allows elements to be positioned horizontally, rather than vertically.

```HTML
<style>
.mycontainer {
  width:100%;
  overflow:auto;
}
.mycontainer div {
  width:33%;
  float:left;
}
</style>
```

#### Inline-block

If you change the ```<div>``` element's ```display``` property from ```block``` to ```inline-block```, the ```<div>``` elements will no longer add a line break before and after, and will be displayed side by side instead of on top of each other.

```HTML
<style>
div {
  width: 30%;
  display: inline-block;
}
</style>
```

#### Flex

The CSS Flexbox Layout Module was introduced to make it easier to design flexible responsive layout structure without using float or positioning.

To make the CSS flex method work, surround the ```<div>``` elements with another ```<div>``` element and give it the status as a flex container.

```HTML
<style>
.mycontainer {
  display: flex;
}
.mycontainer > div {
  width:33%;
}
</style>
```

#### Grid

The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

Sounds almost the same as flex, but has the ability to define more than one row and position each row individually.

The CSS grid method requires that you surround the ```<div>``` elements with another ```<div>``` element and give the status as a grid container, and you must specify the width of each column.

```HTML
<style>
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
```

## HTML class Attribute

The HTML ```class``` attribute is used to specify a class for an HTML element.

### The class Attribute

The ```class```attribute is often used to point to a class name in a style sheet. It can also be used by JavaScript to access and manipulate elements with the specific class name.

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

</body>
</html>
```

### The Syntax For Class

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>
</head>
<body>

<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>

</body>
</html>
```

### Multiple Classes

HTML elements can belong to more than one class.

### Different Elements Can Share Same Class

Different HTML elements can point to the same class name.

```HTML
<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France</p>
```

### Use of the class Attribute in JavaScript

The class name can also be used by JavaScript to perform certain tasks for specific elements.

```HTML
<script>
function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>
```

### Chapter Summary

- The HTML ```class``` attribute specifies one or more class names for an element
- Classes are used by CSS and JavaScript to select and access specific elements
- The ```class``` attribute can be used on any HTML element
- The class name is case sensitive
- Different HTML elements can point to the same class name
- JavaScript can access elements with a specific class name with the ```getElementsByClassName()``` method

[HTML - Classes - W3Schools.com](https://www.youtube.com/watch?v=tWIkDOJo0Ts&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=17)

## HTML id Attribute

The HTML ```id``` attribute is used to specify a unique id for an HTML element.

### The id Attribute

The ```id``` attribute specifies a unique id for an HTML element. The value of the ```id``` attribute must be unique within the HTML document.

The ```id``` attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>
```

### Difference Between Class and ID

A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page:

```HTML
<style>
/* Style the element with the id "myHeader" */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* Style all elements with the class name "city" */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- An element with a unique id -->
<h1 id="myHeader">My Cities</h1>

<!-- Multiple elements with same class -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
```

### HTML Bookmarks with ID and Links

HTML bookmarks are used to allow readers to jump to specific parts of a webpage.

Bookmarks can be useful if your page is very long.

To use a bookmark, you must first create it, and then add a link to it.

Then, when the link is clicked, the page will scroll to the location with the bookmark.

```HTML
<h2 id="C4">Chapter 4</h2>
<a href="#C4">Jump to Chapter 4</a>
<a href="html_demo.html#C4">Jump to Chapter 4</a>
```

### Using the id Attribute in JavaScript

The ```id``` attribute can also be used by JavaScript to perform some tasks for that specific element.

JavaScript can access an element with a specific id with the ```getElementById()``` method:

```HTML
<script>
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>
```

### Chapter Summary

- The ```id``` attribute is used to specify a unique id for an HTML element
- The value of the ```id``` attribute must be unique within the HTML document
- The ```id``` attribute is used by CSS and JavaScript to style/select a specific element
- The value of the ```id``` attribute is case sensitive
- The ```id``` attribute is also used to create HTML bookmarks
- JavaScript can access an element with a specific id with the ```getElementById()``` method

[HTML - Id - W3Schools.com](https://www.youtube.com/watch?v=rZ0k516qZmc&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=18)

## HTML Buttons

Buttons let users interact with a web page. They can submit forms, run JavaScript, or trigger different actions when clicked.

### HTML Button

The HTML ```<button>``` element defines a clickable button.

```HTML
<button>Click Me</button>
```

### Styling HTML Buttons

```HTML
<button class="mytestbtn">Green Button</button>
```

### Disabled Buttons

```HTML
<button disabled>Disabled Button</button>
```

### Button with JavaScript

```HTML
<button onclick="alert('Hello!')">Click Me</button>
```

### Button Types

```HTML
<button type="button">Normal Button</button>
<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

## HTML Iframes

An HTML iframe is used to display a web page within a web page.

### HTML Iframe Syntax

The HTML ```<iframe>``` tag specifies an inline frame.

```HTML
<iframe src="url" title="description"></iframe>
```

### Iframe - Set Height and Width

```HTML
<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>
<iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"></iframe>
```

### Iframe - Remove the Border

```HTML
<iframe src="demo_iframe.htm" style="border:none;" title="Iframe Example"></iframe>
<iframe src="demo_iframe.htm" style="border:2px solid red;" title="Iframe Example"></iframe>
```

### Iframe - Target for a Link

```HTML
<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>
<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```

### Chapter Summary

- The HTML ```<iframe>``` tag specifies an inline frame
- The ```src``` attribute defines the URL of the page to embed
- Always include a ```title``` attribute (for screen readers)
- The ```height``` and ```width``` attributes specify the size of the iframe
- Use ```border:none;``` to remove the border around the iframe

[HTML - Iframes - W3Schools.com](https://www.youtube.com/watch?v=qP23O70ve7k&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=20)

## HTML JavaScript

JavaScript makes HTML pages more dynamic and interactive.

```HTML
<!DOCTYPE html>
<html>
<body>

<h1>My First JavaScript</h1>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html> 
```

### The HTML ```<script>``` Tag

The HTML ```<script>``` tag is used to define a client-side script (JavaScript).

The ```<script>``` element either contains script statements, or it points to an external script file through the ```src``` attribute.

Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.

To select an HTML element, JavaScript most often uses the ```document.getElementById()``` method.

This JavaScript example writes "Hello JavaScript!" into an HTML element with id="demo":

```HTML
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
```

### A Taste of JavaScript

```HTML
<!DOCTYPE html>
<html>
<body>

<h1>My First JavaScript</h1>

<p>JavaScript can change the content of an HTML element:</p>

<button type="button" onclick="myFunction()">Click Me!</button>

<p id="demo">This is a demonstration.</p>

<script>
function myFunction() { 
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
</script>

</body>
</html>
```

JavaScript can change styles and attributes:

```JavaScript
document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.backgroundColor = "yellow";

document.getElementById("image").src = "picture.gif";
```

### The HTML <noscript> Tag

The HTML ```<noscript>``` tag defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support scripts:

```JavaScript
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>
```

[HTML - JavaScript - W3Schools.com](https://www.youtube.com/watch?v=uSgcWDkwc3U&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s)

## HTML File Paths

A file path describes the location of a file in a web site's folder structure.

### File Path Examples

| Path | Description |
|------|-------------|
| `<img src="picture.jpg">` | The "picture.jpg" file is located in the same folder as the current page |
| `<img src="images/picture.jpg">` | The "picture.jpg" file is located in the images folder in the current folder |
| `<img src="/images/picture.jpg">` | The "picture.jpg" file is located in the images folder at the root of the current web |
| `<img src="../picture.jpg">` | The "picture.jpg" file is located in the folder one level up from the current folder |

### HTML File Paths 

A file path describes the location of a file in a web site's folder structure.

### Absolute File Paths

```HTML
<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain">
```

### Relative File Paths

```HTML
<img src="/images/picture.jpg" alt="Mountain">
<img src="images/picture.jpg" alt="Mountain">
<img src="../images/picture.jpg" alt="Mountain">
```

### Best Practice

It is best practice to use relative file paths (if possible).