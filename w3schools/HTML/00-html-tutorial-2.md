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

##

##

##

##

##