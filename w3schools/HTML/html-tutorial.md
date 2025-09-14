# HTML Tutorial

## HTML Home

HTML is the standard markup language for Web pages.

With HTML you can create your own Website.

```
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

```
<tagname> Content goes here... </tagname>
```

The HTML element is everything from the start tag to the end tag:

```
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

```
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

```
<tagname>Content goes here...</tagname>
```

### Nested HTML Elements

HTML elements can be nested (this means that elements can contain other elements).

All HTML documents consist of nested HTML elements.

### Empty HTML Elements

HTML elements with no content are called empty elements.

The ```<br>``` tag defines a line break, and is an empty element without a closing tag:

```
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

```
<a href="https://www.w3schools.com">Visit W3Schools</a>
```

### The src Attribute

The ```<img>``` tag is used to embed an image in an HTML page. The ```src``` attribute specifies the path to the image to be displayed:

```
<img src="img_girl.jpg">
```

There are two ways to specify the URL in the ```src``` attribute:
1. Absolute URL: src="https://www.w3schools.com/images/img_girl.jpg".
2. Relative URL: src="/images/img_girl.jpg".

### The width and height Attributes

The ```<img>``` tag should also contain the ```width``` and ```height``` attributes, which specify the width and height of the image (in pixels):

```
<img src="img_girl.jpg" width="500" height="600">
```

### The alt Attribute

The required ```alt``` attribute for the ```<img>``` tag specifies an alternate text for an image, if the image for some reason cannot be displayed.

```
<img src="img_girl.jpg" alt="Girl with a jacket">
```

[HTML - Attributes - W3Schools.com](https://www.youtube.com/watch?v=yMX901oVtn8&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=4)


### The style Attribute

The ```style``` attribute is used to add styles to an element, such as color, font, size, and more.

```
<p style="color:red;">This is a red paragraph.</p>
```

### The lang Attribute

You should always include the lang attribute inside the ```<html>``` tag, to declare the language of the Web page. This is meant to assist search engines and browsers.

```
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

```
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

```
<h1 style="font-size:60px;">Heading 1</h1>
```

[HTML - Headings - W3Schools.com](https://www.youtube.com/watch?v=9gHPpwq6IaY&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=5)

## HTML Paragraphs

A paragraph always starts on a new line, and is usually a block of text.

### HTML Paragraphs

The HTML ```<p>``` element defines a paragraph.

A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

```
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

```
<tagname style="property:value;">
```

The **property** is a CSS property. The **value** is a CSS value.

### Background Color

The CSS ```background-color``` property defines the background color for an HTML element.

```
<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
```

### Text Color

The CSS ```color``` property defines the text color for an HTML element:

```
<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
```

### Fonts

The CSS ```font-family``` property defines the font to be used for an HTML element:

```
<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>
```

### Text Size

The CSS ```font-size``` property defines the text size for an HTML element:

```
<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>
```

### Text Alignment

The CSS ```text-align``` property defines the horizontal text alignment for an HTML element:

```
<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>
```

[HTML - Styles - W3Schools.com](https://www.youtube.com/watch?v=twdNPJfbj_8&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=7)

## HTML Text Formatting

##

##

##