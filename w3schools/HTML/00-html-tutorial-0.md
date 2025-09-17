# HTML Tutorial

## HTML Home

HTML is the standard markup language for Web pages.

With HTML you can create your own Website.

```HTML
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

[Learn HTML for Beginners - W3Schools.com](https://www.youtube.com/watch?v=BzYMFd-lQL4)

## HTML Introduction

### What is HTML?

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

### Example Explained

- The ```<!DOCTYPE html>``` declaration defines that this document is an HTML5 document
- The ```<html>``` element is the root element of an HTML page
- The ```<head>``` element contains meta information about the HTML page
- The ```<title>``` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
- The ```<body>``` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The ```<h1>``` element defines a large heading
- The ```<p>``` element defines a paragraph

### What is an HTML Element?

An HTML element is defined by a start tag, some content, and an end tag:

```HTML
<tagname> Content goes here... </tagname>
```

The HTML element is everything from the start tag to the end tag:

```HTML
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

### Web Browsers

The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.

[HTML - Introduction - W3Schools.com](https://www.youtube.com/watch?v=it1rTvBcfRg&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s)

## HTML Editors

A simple text editor is all you need to learn HTML.

- Set the encoding to UTF-8 (which is the preferred encoding for HTML files).

[HTML - Editors - W3Schools.com](https://www.youtube.com/watch?v=bBP0ckEln4Y&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=2)

## HTML Basic

### HTML Documents

All HTML documents must start with a document type declaration: ```<!DOCTYPE html>```.

The HTML document itself begins with ```<html>``` and ends with ```</html>```.

The **visible part** of the HTML document is between ```<body>``` and ```</body>```.

### The <!DOCTYPE> Declaration

The ```<!DOCTYPE>``` declaration represents the document type, and helps browsers to display web pages correctly.

### HTML Headings

HTML headings are defined with the ```<h1>``` to ```<h6>``` tags.

### HTML Paragraphs

HTML paragraphs are defined with the ```<p>``` tag.

### HTML Links

HTML links are defined with the ```<a>``` tag:

```HTML
<a href="https://www.w3schools.com">This is a link</a>
```

The link's destination is specified in the ```href``` attribute. 

### HTML Images

HTML images are defined with the ```<img>``` tag.

### How to View HTML Source

Click ```CTRL + U``` in an HTML page, or right-click on the page and select "View Page Source".

## HTML Elements

An HTML element is defined by a start tag, some content, and an end tag.

### HTML Elements

The HTML element is everything from the start tag to the end tag:

```HTML
<tagname>Content goes here...</tagname>
```

### Nested HTML Elements

HTML elements can be nested (this means that elements can contain other elements).

All HTML documents consist of nested HTML elements.

### Empty HTML Elements

HTML elements with no content are called empty elements.

The ```<br>``` tag defines a line break, and is an empty element without a closing tag:

```HTML
<p>This is a <br> paragraph with a line break.</p>
```

### HTML is Not Case Sensitive

HTML tags are not case sensitive: ```<P>``` means the same as ```<p>```.

[HTML - Elements - W3Schools.com](https://www.youtube.com/watch?v=vIoO52MdZFE&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=3)

## HTML Attributes

### HTML Attributes

- All HTML elements can have **attributes**
- Attributes provide **additional information** about elements
- Attributes are always specified in **the start tag**
- Attributes usually come in name/value pairs like: **name="value"**

### The href Attribute

The ```<a>``` tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:

```HTML
<a href="https://www.w3schools.com">Visit W3Schools</a>
```

### The src Attribute

The ```<img>``` tag is used to embed an image in an HTML page. The ```src``` attribute specifies the path to the image to be displayed:

```HTML
<img src="img_girl.jpg">
```

There are two ways to specify the URL in the ```src``` attribute:
1. Absolute URL: src="https://www.w3schools.com/images/img_girl.jpg".
2. Relative URL: src="/images/img_girl.jpg".

### The width and height Attributes

The ```<img>``` tag should also contain the ```width``` and ```height``` attributes, which specify the width and height of the image (in pixels):

```HTML
<img src="img_girl.jpg" width="500" height="600">
```

### The alt Attribute

The required ```alt``` attribute for the ```<img>``` tag specifies an alternate text for an image, if the image for some reason cannot be displayed.

```HTML
<img src="img_girl.jpg" alt="Girl with a jacket">
```

[HTML - Attributes - W3Schools.com](https://www.youtube.com/watch?v=yMX901oVtn8&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=4)


### The style Attribute

The ```style``` attribute is used to add styles to an element, such as color, font, size, and more.

```HTML
<p style="color:red;">This is a red paragraph.</p>
```

### The lang Attribute

You should always include the lang attribute inside the ```<html>``` tag, to declare the language of the Web page. This is meant to assist search engines and browsers.

```HTML
<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>
```

### The title Attribute

The ```title``` attribute defines some extra information about an element.

The value of the title attribute will be displayed as a tooltip when you mouse over the element:

```HTML
<p title="I'm a tooltip">This is a paragraph.</p>
```

## HTML Headings

HTML headings are titles or subtitles that you want to display on a webpage.

### HTML Headings

HTML headings are defined with the ```<h1>``` to ```<h6>``` tags.

### Headings Are Important

Search engines use the headings to index the structure and content of your web pages.

```<h1>``` headings should be used for main headings, followed by ```<h2>``` headings, then the less important ```<h3>```, and so on.

### Bigger Headings

Each HTML heading has a default size. However, you can specify the size for any heading with the style attribute, using the CSS font-size property:

```HTML
<h1 style="font-size:60px;">Heading 1</h1>
```

[HTML - Headings - W3Schools.com](https://www.youtube.com/watch?v=9gHPpwq6IaY&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=5)

## HTML Paragraphs

A paragraph always starts on a new line, and is usually a block of text.

### HTML Paragraphs

The HTML ```<p>``` element defines a paragraph.

A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

```HTML
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### HTML Display

You cannot be sure how HTML will be displayed.

Large or small screens, and resized windows will create different results.

With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.

The browser will automatically remove any extra spaces and lines when the page is displayed.

### HTML Horizontal Rules

The ```<hr>``` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.

### HTML Line Breaks

The HTML ```<br>``` element defines a line break.

[HTML - Paragraphs - W3Schools.com](https://www.youtube.com/watch?v=qis4kAOThLw&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=6)

### The HTML <pre> Element

The HTML ```<pre>``` element defines preformatted text.

The text inside a ```<pre>``` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.

## HTML Styles

The HTML ```style``` attribute is used to add styles to an element, such as **color, font, size**, and more.

### The HTML Style Attribute

Setting the style of an HTML element, can be done with the ```style``` attribute.

The HTML ```style``` attribute has the following syntax:

```HTML
<tagname style="property:value;">
```

The **property** is a CSS property. The **value** is a CSS value.

### Background Color

The CSS ```background-color``` property defines the background color for an HTML element.

```HTML
<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
```

### Text Color

The CSS ```color``` property defines the text color for an HTML element:

```HTML
<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
```

### Fonts

The CSS ```font-family``` property defines the font to be used for an HTML element:

```HTML
<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>
```

### Text Size

The CSS ```font-size``` property defines the text size for an HTML element:

```HTML
<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>
```

### Text Alignment

The CSS ```text-align``` property defines the horizontal text alignment for an HTML element:

```HTML
<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>
```

[HTML - Styles - W3Schools.com](https://www.youtube.com/watch?v=twdNPJfbj_8&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=7)

## HTML Text Formatting

HTML contains several elements for defining text with a special meaning.

### HTML Formatting Elements

Formatting elements were designed to display special types of text:

- ```<b>``` - Bold text
- ```<strong>``` - Important text
- ```<i>``` - Italic text
- ```<em>``` - Emphasized text
- ```<mark>``` - Marked text
- ```<small>``` - Smaller text
- ```<del>``` - Deleted text
- ```<ins>``` - Inserted text
- ```<sub>``` - Subscript text
- ```<sup>``` - Superscript text

[HTML - Formatting - W3Schools.com](https://www.youtube.com/watch?v=7FqQLqNIEY8&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=9)

## HTML Quotation and Citation Elements

### HTML Quotation and Citation Elements

- ```<abbr>``` - Defines an abbreviation or acronym
- ```<address>``` -	Defines contact information for the author/owner of a document
- ```<bdo>``` - Defines the text direction
- ```<blockquote>``` - Defines a section that is quoted from another source
- ```<cite>``` - Defines the title of a work
- ```<q>``` - Defines a short inline quotation

## HTML Comments

HTML comments are not displayed in the browser, but they can help document your HTML source code.

### HTML Comment Tag

```HTML
<!-- Write your comments here -->
```

Comments can be used to hide content.

```HTML
<p>This is a paragraph.</p>

<!-- <p>This is another paragraph </p> -->

<p>This is a paragraph too.</p>

<p>This <!-- great text --> is a paragraph.</p>

```

[HTML - Comentários - W3Schools.com](https://www.youtube.com/watch?v=229HYq40vaA&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=9)

## HTML Colors

HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.

### HTML Colors

#### Color Names

HTML supports [140 standard color names](https://www.w3schools.com/colors/colors_names.asp).

Example: Tomato, Orange, DodgerBlue, MediumSeaGreen, Gray, SlateBlue, Violet and LightGray.

#### Background Color

```HTML
<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>
```

#### Text Color

```HTML
<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>
```

#### Border Color

```HTML
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>
```

#### Color Values

```HTML
<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>
```

[HTML - Colors - W3Schools.com](https://www.youtube.com/watch?v=zCrolmdqmF8&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=10)

### HTML RGB Colors

An RGB color value represents RED, GREEN, and BLUE light sources.

An RGBA color value is an extension of RGB with an Alpha channel (opacity).

#### RGB Color Values

In HTML, a color can be specified as an RGB value, using this formula:

```
rgb(red, green, blue)
```

#### Shades of Gray

Shades of gray are often defined using equal values for all three parameters.

#### RGBA Color Values

RGBA color values are an extension of RGB color values with an Alpha channel - which specifies the opacity for a color.

```
rgba(red, green, blue, alpha)
```

### HTML HEX Colors

A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.

#### HEX Color Values

In HTML, a color can be specified using a hexadecimal value in the form:

```
#rrggbb
```

### HTML HSL and HSLA Colors

#### HSL Color Values

HSL stands for hue, saturation, and lightness.

HSLA color values are an extension of HSL with an Alpha channel (opacity).

```
hsl(hue, saturation, lightness)
```

**Hue** is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.

**Saturation** is a percentage value. 0% means a shade of gray, and 100% is the full color.

**Lightness** is also a percentage value. 0% is black, and 100% is white.

#### HSLA Color Values

HSLA color values are an extension of HSL color values, with an Alpha channel - which specifies the opacity for a color.

An HSLA color value is specified with:

```
hsla(hue, saturation, lightness, alpha)
```

## HTML Styles - CSS

CSS stands for Cascading Style Sheets.

CSS saves a lot of work. It can control the layout of multiple web pages all at once.

### What is CSS?

Cascading Style Sheets (CSS) is used to format the layout of a webpage.

With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!

### Using CSS

CSS can be added to HTML documents in 3 ways:

- **Inline** - by using the ```style``` attribute inside HTML elements
- **Internal** - by using a ```<style>``` element in the ```<head>``` section
- **External** - by using a ```<link>``` element to link to an external CSS file

#### Inline CSS

An inline CSS is used to apply a unique style to a single HTML element.

```HTML
<h1 style="color:blue;">A Blue Heading</h1>

<p style="color:red;">A red paragraph.</p>
```

#### Internal CSS

An internal CSS is used to define a style for a single HTML page.

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

#### External CSS

An external style sheet is used to define the style for many HTML pages.

```HTML
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

"styles.css":
```CSS
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
```

### CSS Colors, Fonts and Sizes

Here, we will demonstrate some commonly used CSS properties. You will learn more about them later.

The CSS ```color``` property defines the text color to be used.

The CSS ```font-family``` property defines the font to be used.

The CSS ```font-size``` property defines the text size to be used.

### CSS Border

The CSS ```border``` property defines a border around an HTML element.

```CSS
p {
  border: 2px solid powderblue;
}
```

### CSS Padding

The CSS ```padding``` property defines a padding (space) between the text and the border.

```CSS
p {
  border: 2px solid powderblue;
  padding: 30px;
}
```

### CSS Margin

The CSS ```margin``` property defines a margin (space) outside the border.

```
p {
  border: 2px solid powderblue;
  margin: 50px;
}
```

### Link to External CSS

External style sheets can be referenced with a full URL or with a path relative to the current web page.

```HTML
<!-- full URL to link to a style sheet -->
<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">
<!-- sheet located in the html folder on the current web site -->
<link rel="stylesheet" href="/html/styles.css"> 
<!-- style sheet located in the same folder as the current page -->
<link rel="stylesheet" href="styles.css"> 
```

### Chapter Summary

- Use the HTML ```style``` attribute for inline styling
- Use the HTML ```<style>``` element to define internal CSS
- Use the HTML ```<link>``` element to refer to an external CSS file
- Use the HTML ```<head>``` element to store ```<style>``` and ```<link>``` elements
- Use the CSS ```color``` property for text colors
- Use the CSS ```font-family``` property for text fonts
- Use the CSS ```font-size``` property for text sizes
- Use the CSS ```border``` property for borders
- Use the CSS ```padding``` property for space inside the border
- Use the CSS ```margin``` property for space outside the border

[HTML - CSS - W3Schools.com](https://www.youtube.com/watch?v=cZHp-Oozg6I&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=11)

## HTML Links

Links are found in nearly all web pages. Links allow users to click their way from page to page.

### Links

#### HTML Links - Hyperlinks

HTML links are hyperlinks.

You can click on a link and jump to another document.

When you move the mouse over a link, the mouse arrow will turn into a little hand.

#### HTML Links - Syntax

```
<a href="url">link text</a>
```

```HTML
<a href="https://www.w3schools.com/">Visit W3Schools.com!</a>
```

By default, links will appear as follows in all browsers:

- An unvisited link is underlined and blue
- A visited link is underlined and purple
- An active link is underlined and red

#### HTML Links - The target Attribute

By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The ```target``` attribute specifies where to open the linked document.

The ```target``` attribute can have one of the following values:

- ```_self``` - Default. Opens the document in the same window/tab as it was clicked
- ```_blank``` - Opens the document in a new window or tab
- ```_parent``` - Opens the document in the parent frame
- ```_top``` - Opens the document in the full body of the window

```HTML
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
```

#### Absolute URLs vs. Relative URLs

```HTML
<h2>Absolute URLs</h2>
<p><a href="https://www.w3.org/">W3C</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>
```

#### HTML Links - Use an Image as a Link

```HTML
<a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```

#### Link to an Email Address

Use ```mailto```: inside the ```href``` attribute to create a link that opens the user's email program (to let them send a new email):

```HTML
<a href="mailto:someone@example.com">Send email</a>
```

#### Button as a Link

To use an HTML button as a link, you have to add some JavaScript code.

JavaScript allows you to specify what happens at certain events, such as a click of a button:

```HTML
<button onclick="document.location='default.asp'">HTML Tutorial</button>
```

#### Link Titles

The ```title``` attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.

```HTML
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>
```

#### More on Absolute URLs and Relative URLs

```HTML
<!-- Use a full URL to link to a web page -->
<a href="https://www.w3schools.com/html/default.asp">HTML tutorial</a>
```

```HTML
<!-- Link to a page located in the html folder on the current web site: -->
<a href="/html/default.asp">HTML tutorial</a>
```

```HTML
<!-- Link to a page located in the same folder as the current page: -->
<a href="default.asp">HTML tutorial</a>
```

#### Chapter Summary

- Use the ```<a>``` element to define a link
- Use the ```href``` attribute to define the link address
- Use the ```target``` attribute to define where to open the linked document
- Use the ```<img>``` element (inside ```<a>```) to use an image as a link
- Use the ```mailto:``` scheme inside the ```href``` attribute to create a link that opens the user's email program

[HTML - Links - W3Schools.com](https://www.youtube.com/watch?v=HA6bByKdAQM&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=13)

### Link Colors

An HTML link is displayed in a different color depending on whether it has been visited, is unvisited, or is active.

#### HTML Link Colors

By default, a link will appear like this (in all browsers):

- An unvisited link is underlined and blue
- A visited link is underlined and purple
- An active link is underlined and red

You can change the link state colors, by using CSS:

```HTML
<!-- Here, an unvisited link will be green with no underline. 
A visited link will be pink with no underline. 
An active link will be yellow and underlined. 
In addition, when mousing over a link (a:hover) it will become red and underlined: -->
<style>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>
```

#### Link Buttons

A link can also be styled as a button, by using CSS:

```CSS
<style>
a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: red;
}
</style>
```

### Link Bookmarks

HTML links can be used to create bookmarks, so that readers can jump to specific parts of a web page.

#### Create a Bookmark in HTML

To create a bookmark - first create the bookmark, then add a link to it.

When the link is clicked, the page will scroll down or up to the location with the bookmark.

```HTML 
<a href="#C4">Jump to Chapter 4</a>

<a href="html_demo.html#C4">Jump to Chapter 4</a>
```

#### Chapter Summary

- Use the ```id``` attribute (id="value") to define bookmarks in a page
- Use the ```href``` attribute (href="#value") to link to the bookmark