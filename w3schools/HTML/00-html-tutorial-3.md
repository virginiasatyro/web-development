# HTML Tutorial

## HTML - The Head Element

The HTML ```<head>``` element is a container for the following elements: ```<title>```, ```<style>```, ```<meta>```, ```<link>```, ```<script>```, and ```<base>```.

### The HTML ```<head>``` Element

The ```<head>``` element is a container for metadata (data about data) and is placed between the ```<html>``` tag and the ```<body>``` tag.

HTML metadata is data about the HTML document. Metadata is not displayed on the page.

Metadata typically define the document title, character set, styles, scripts, and other meta information.

### The HTML ```<title>``` Element

The ```<title>``` element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

The ```<title>``` element is required in HTML documents!

The content of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.

The ```<title>``` element:

- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites
- displays a title for the page in search engine-results

So, try to make the title as accurate and meaningful as possible!

```HTML
<!DOCTYPE html>
<html>
<head>
  <title>A Meaningful Page Title</title>
</head>
<body>

The content of the document......

</body>
</html>
```

### The HTML ```<style>``` Element

The ```<style>``` element is used to define style information for a single HTML page:

```HTML
<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>
```

### The HTML <link> Element

The ```<link>``` element defines the relationship between the current document and an external resource.

The ```<link>``` tag is most often used to link to external style sheets:

```HTML
<link rel="stylesheet" href="mystyle.css">
```

### The HTML <meta> Element

The ```<meta>``` element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.

The metadata will not be displayed on the page, but is used by browsers (how to display content or reload page), by search engines (keywords), and other web services.

Define the character set used:

```HTML
<meta charset="UTF-8">
```

Define keywords for search engines:

```HTML
<meta name="keywords" content="HTML, CSS, JavaScript">
```

Define a description of your web page:

```HTML
<meta name="description" content="Free Web tutorials">
```

Define the author of a page:

```HTML
<meta name="author" content="John Doe">
```

Refresh document every 30 seconds:

```HTML
<meta http-equiv="refresh" content="30">
```

Setting the viewport to make your website look good on all devices:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Example:

```HTML
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
```

### Setting The Viewport

The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.

You should include the following ```<meta>``` element in all your web pages:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This gives the browser instructions on how to control the page's dimensions and scaling.

The ```width=device-width``` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The ```initial-scale=1.0``` part sets the initial zoom level when the page is first loaded by the browser.

### The HTML ```<script>``` Element

The ```<script>``` element is used to define client-side JavaScripts.

```HTML
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
</script>
```

### The HTML <base> Element

The ```<base>``` element specifies the base URL and/or target for all relative URLs in a page.

The ```<base>``` tag must have either an href or a target attribute present, or both.

There can only be one single ```<base>``` element in a document!

```HTML
<head>
<base href="https://www.w3schools.com/" target="_blank">
</head>

<body>
<img src="images/stickman.gif" width="24" height="39" alt="Stickman">
<a href="tags/tag_base.asp">HTML base Tag</a>
</body>
```

### Chapter Summary

- The ```<head>``` element is a container for metadata (data about data)
- The ```<head>``` element is placed between the ```<html>``` tag and the ```<body>``` tag
- The ```<title>``` element is required and it defines the title of the document
- The ```<style>``` element is used to define style information for a single document
- The ```<link>``` tag is most often used to link to external style sheets
- The ```<meta>``` element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings
- The ```<script>``` element is used to define client-side JavaScripts
- The ```<base>``` element specifies the base URL and/or target for all relative URLs in a page

[HTML - Head - W3Schools.com](https://www.youtube.com/watch?v=WeuVX5x2MJE&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s)

## HTML Layout Elements and Techniques

Websites often display content in multiple columns (like a magazine or a newspaper).

### HTML Layout Elements

- ```<header>``` - Defines a header for a document or a section
- ```<nav>``` - Defines a set of navigation links
- ```<section>``` - Defines a section in a document
- ```<article>``` - Defines independent, self-contained content
- ```<aside>``` - Defines content aside from the content (like a sidebar)
- ```<footer>``` - Defines a footer for a document or a section
- ```<details>``` - Defines additional details that the user can open and close on demand
- ```<summary>``` - Defines a heading for the ```<details>``` element

![HTML Layout Elements](img/html-layout-elements.gif)

### HTML Layout Techniques

There are four different techniques to create multicolumn layouts. Each technique has its pros and cons:

- CSS frameworks
- CSS float property
- CSS flexbox
- CSS grid

### CSS Frameworks

If you want to create your layout fast, you can use a CSS framework, like W3.CSS or Bootstrap.

### CSS Float Layout

You can create entire web layouts using the CSS ```float``` property. Float is easy to learn - you just need to remember how the ```float``` and ```clear``` properties work. Disadvantages: Floating elements are tied to the document flow, which may harm the flexibility.

### CSS Flexbox Layout

Use of flexbox ensures that elements behave predictably when the page layout must accommodate different screen sizes and different display devices.

### CSS Grid Layout

The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

## HTML Responsive Web Design

**Responsive web design** is about creating web pages that **look good on all devices!**
A responsive web design will automatically adjust for different screen sizes and viewports.

### What is Responsive Web Design?

Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones).

### Setting The Viewport

To create a responsive website, add the following ```<meta> ```tag to all your web pages:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Responsive Images

Responsive images are images that scale nicely to fit any browser size.

#### Using the width Property

If the CSS ```width``` property is set to 100%, the image will be responsive and scale up and down.

```HTML
<img src="img_girl.jpg" style="width:100%;">
```

### Using the max-width Property

If the ```max-width``` property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size:

```HTML
<img src="img_girl.jpg" style="max-width:100%;height:auto;">
```

### Show Different Images Depending on Browser Width

The HTML ```<picture>``` element allows you to define different images for different browser window sizes.

```HTML
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
  <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
  <source srcset="flowers.jpg">
  <img src="img_smallflower.jpg" alt="Flowers">
</picture>
```

## Responsive Text Size

The text size can be set with a "vw" unit, which means the "viewport width".

That way the text size will follow the size of the browser window:

```HTML
<h1 style="font-size:10vw">Hello World</h1>
```

### Media Queries

In addition to resize text and images, it is also common to use media queries in responsive web pages.

With media queries you can define completely different styles for different browser sizes.

Example: resize the browser window to see that the three div elements below will display horizontally on large screens and stack vertically on small screens:

```CSS
<style>
.left, .right {
  float: left;
  width: 20%; /* The width is 20%, by default */
}

.main {
  float: left;
  width: 60%; /* The width is 60%, by default */
}

/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {
  .left, .main, .right {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>
```

### Responsive Web Page - Full Example

A responsive web page should look good on large desktop screens and on small mobile phones.

### Responsive Web Design - Frameworks

All popular CSS Frameworks offer responsive design.

#### W3.CSS

W3.CSS is a modern CSS framework with support for desktop, tablet, and mobile design by default.

W3.CSS is smaller and faster than similar CSS frameworks.

W3.CSS is designed to be independent of jQuery or any other JavaScript library.

#### Bootstrap

Another popular CSS framework is Bootstrap.

## HTML Computer Code Elements

HTML contains several elements for defining user input and computer code.

```HTML
<code>
x = 5;
y = 6;
z = x + y;
</code>
```

### HTML <kbd> For Keyboard Input

The HTML ```<kbd>``` element is used to define keyboard input. The content inside is displayed in the browser's default monospace font.

```HTML
<p>Save the document by pressing <kbd>Ctrl + S</kbd></p>
```

### HTML ```<samp>``` For Program Output

The HTML ```<samp>``` element is used to define sample output from a computer program. The content inside is displayed in the browser's default monospace font.

```HTML
<p>Message from my computer:</p>
<p><samp>File not found.<br>Press F1 to continue</samp></p>
```

### HTML ```<code>``` For Computer Code

The HTML ```<code>``` element  is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.

```HTML
<code>
x = 5;
y = 6;
z = x + y;
</code>
```

### Preserve Line-Breaks

Notice that the ```<code>``` element does NOT preserve extra whitespace and line-breaks.

To preserve extra whitespace and line-breaks, you can put the ```<code>``` element inside a ```<pre>``` element:

```HTML
<pre>
<code>
x = 5;
y = 6;
z = x + y;
</code>
</pre>
```

### HTML ```<var>``` For Variables

The HTML ```<var>``` element  is used to define a variable in programming or in a mathematical expression. The content inside is typically displayed in italic.

```HTML
<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>
```

### Chapter Summary

- The ```<kbd>``` element defines keyboard input
- The ```<samp>``` element defines sample output from a computer program
- The ```<code>``` element defines a piece of computer code
- The ```<var>``` element defines a variable in programming or in a mathematical expression
- The ```<pre>``` element defines preformatted text

## HTML Semantic Elements

Semantic elements = elements with a meaning.

### What are Semantic Elements?

A semantic element clearly describes its meaning to both the browser and the developer.

Examples of **non-semantic** elements: ```<div>``` and ```<span>``` - Tells nothing about its content.

Examples of **semantic elements**: ```<img>```, ```<table>```, and ```<article>``` - Clearly defines its content.

### Semantic Elements in HTML

In HTML there are several semantic elements that can be used to define different parts of a web page:  

![HTML Layout Elements](img/html-layout-elements.gif)

- ```<article>```
- ```<aside>```
- ```<details>```
- ```<figcaption>```
- ```<figure>```
- ```<footer>```
- ```<header>```
- ```<main>```
- ```<mark>```
- ```<nav>```
- ```<section>```
- ```<summary>```
- ```<time>```

### HTML ```<section>``` Element

The ```<section>``` element defines a section in a document.

Examples of where a ```<section>``` element can be used:

- Chapters
- Introduction
- News items
- Contact information

```HTML 
<section>
<h1>WWF</h1>
<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>

<section>
<h1>WWF's Panda symbol</h1>
<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
</section>
```

### HTML ```<article>``` Element

The ```<article>``` element specifies independent, self-contained content.

Examples of where the ```<article>``` element can be used:

- Forum posts
- Blog posts
- User comments
- Product cards
- Newspaper articles

```HTML 
<article>
<h2>Google Chrome</h2>
<p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
</article>

<article>
<h2>Mozilla Firefox</h2>
<p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
</article>

<article>
<h2>Microsoft Edge</h2>
<p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
</article>
```

### Nesting <article> in <section> or Vice Versa?

The ```<article>``` element specifies independent, self-contained content.

The ```<section>``` element defines a section in a document.

Can we use the definitions to decide how to nest those elements? No, we cannot!

So, you will find HTML pages with ```<section>``` elements containing ```<article>``` elements, and ```<article>``` elements containing ```<section>``` elements.

### HTML <header> Element

The ```<header>``` element represents a container for introductory content or a set of navigational links.

A ```<header>``` element typically contains:

- one or more heading elements (<h1> - <h6>)
- logo or icon
- authorship information

```HTML
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```

### HTML ```<footer>``` Element

The ```<footer>``` element defines a footer for a document or section.

A ```<footer>``` element typically contains:

- authorship information
- copyright information
- contact information
- sitemap
- back to top links
- related documents

You can have several ```<footer>``` elements in one document.

```HTML
<footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
```

### HTML ```<nav>``` Element

The ```<nav>``` element defines a set of navigation links.

```HTML
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```

### HTML ```<aside>``` Element

The ```<aside>``` element defines some content aside from the content it is placed in (like a sidebar).

The ```<aside>``` content should be indirectly related to the surrounding content.

```HTML
<p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

<aside>
<h4>Epcot Center</h4>
<p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</aside>
```

### HTML ```<figure>``` and ```<figcaption>``` Elements

The ```<figure>``` tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.

The ```<figcaption>``` tag defines a caption for a ```<figure>``` element. The ```<figcaption>``` element can be placed as the first or as the last child of a ```<figure>``` element.

The ```<img>``` element defines the actual image/illustration. 

```HTML
<figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
```

### Why Semantic Elements?

According to the W3C: "A semantic Web allows data to be shared and reused across applications, enterprises, and communities."

### Semantic Elements in HTML

- ```<article>```	Defines independent, self-contained content
- ```<aside>```	Defines content aside from the page content
- ```<details>```	Defines additional details that the user can view or hide
- ```<figcaption>```	Defines a caption for a <figure> element
- ```<figure>```	Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
- ```<footer>```	Defines a footer for a document or section
- ```<header>```	Specifies a header for a document or section
- ```<main>```	Specifies the main content of a document
- ```<mark>```	Defines marked/highlighted text
- ```<nav>```	Defines navigation links
- ```<section>```	Defines a section in a document
- ```<summary>```	Defines a visible heading for a ```<details>``` element
- ```<time>```	Defines a date/time

## HTML Style Guide

Consistent, clean, and tidy HTML code makes it easier for others to read and understand your code.

### Always Declare Document Type

Always declare the document type as the first line in your document.

```HTML
<!DOCTYPE html>
```

### Use Lowercase Element Names

HTML allows mixing uppercase and lowercase letters in element names.

However, we recommend using lowercase element names, because:

- Mixing uppercase and lowercase names looks bad
- Developers normally use lowercase names
- Lowercase looks cleaner
- Lowercase is easier to type

```HTML
<body>
<p>This is a paragraph.</p>
</body>
```

### Close All HTML Elements

In HTML, you do not have to close all elements (for example the ```<p>``` element).

However, we strongly recommend closing all HTML elements, like this:

```HTML
<section>
  <p>This is a paragraph.</p>
  <p>This is a paragraph.</p>
</section>
```

### Use Lowercase Attribute Names

HTML allows mixing uppercase and lowercase letters in attribute names.

However, we recommend using lowercase attribute names, because:

- Mixing uppercase and lowercase names looks bad
- Developers normally use lowercase names
- Lowercase looks cleaner
- Lowercase is easier to type

```HTML
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
```

### Always Quote Attribute Values

HTML allows attribute values without quotes.

However, we recommend quoting attribute values, because:

- Developers normally quote attribute values
- Quoted values are easier to read
- You MUST use quotes if the value contains spaces

```HTML
<table class="striped">
```

### Always Specify ```alt```, ```width```, and ```height``` for Images

Always specify the ```alt``` attribute for images. This attribute is important if the image for some reason cannot be displayed.

Also, always define the ```width``` and ```height``` of images. This reduces flickering, because the browser can reserve space for the image before loading.

```HTML
<img src="html5.gif" alt="HTML5" style="width:128px;height:128px">
```

### Spaces and Equal Signs

HTML allows spaces around equal signs. But space-less is easier to read and groups entities better together.

```HTML
<link rel="stylesheet" href="styles.css">
```

### Avoid Long Code Lines

When using an HTML editor, it is NOT convenient to scroll right and left to read the HTML code.

Try to avoid too long code lines.

### Blank Lines and Indentation

Do not add blank lines, spaces, or indentations without a reason.

For readability, add blank lines to separate large or logical code blocks.

For readability, add two spaces of indentation. Do not use the tab key.

```HTML
<body>

<h1>Famous Cities</h1>

<h2>Tokyo</h2>
<p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>

<h2>London</h2>
<p>London is the capital city of England. It is the most populous city in the United Kingdom.</p>

<h2>Paris</h2>
<p>Paris is the capital of France. The Paris area is one of the largest population centers in Europe.</p>

</body>
```

Good Table Example:

```HTML
<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>A</td>
    <td>Description of A</td>
  </tr>
  <tr>
    <td>B</td>
    <td>Description of B</td>
  </tr>
</table>
```

Good List Example:

```HTML
<ul>
  <li>London</li>
  <li>Paris</li>
  <li>Tokyo</li>
</ul>
```

### Never Skip the ```<title>``` Element

The ```<title>``` element is required in HTML.

The ```<title>``` element:

- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites
- displays a title for the page in search-engine results

```HTML
<title>HTML Style Guide and Coding Conventions</title>
```

### Omitting <html> and <body>?

An HTML page will validate without the ```<html>``` and ```<body>``` tags. However, we strongly recommend to always add the ```<html>``` and ```<body>``` tags!

### Omitting ```<head>```?

The HTML ```<head>``` tag can also be omitted. However, we recommend using the ```<head>``` tag.

### Close Empty HTML Elements?

In HTML, it is optional to close empty elements.

```HTML
<meta charset="utf-8">
<meta charset="utf-8" />
```

If you expect XML/XHTML software to access your page, keep the closing slash (/), because it is required in XML and XHTML.

### Add the lang Attribute

You should always include the lang attribute inside the ```<html>``` tag, to declare the language of the Web page. This is meant to assist search engines and browsers.

```HTML
<!DOCTYPE html>
<html lang="en-us">
<head>
  <title>Page Title</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

### Meta Data

To ensure proper interpretation and correct search engine indexing, both the language and the character encoding ```<meta charset="charset">``` should be defined as early as possible in an HTML document:

```HTML
<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
```

### Setting The Viewport

The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.

You should include the following ```<meta>``` element in all your web pages:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
This gives the browser instructions on how to control the page's dimensions and scaling.

### HTML Comments

```HTML
<!-- This is a comment -->

<!--
  This is a long comment example. This is a long comment example.
  This is a long comment example. This is a long comment example.
-->
```

### Using Style Sheets

```HTML
<link rel="stylesheet" href="styles.css">
```

```CSS
p.intro {font-family:Verdana;font-size:16em;}
```

```CSS
body {
  background-color: lightgrey;
  font-family: "Arial Black", Helvetica, sans-serif;
  font-size: 16em;
  color: black;
}
```

### Loading JavaScript in HTML

```JavaScript
<script src="myscript.js">
```

### Use Lower Case File Names

To avoid these problems, always use lowercase file names! Including images.

### File Extensions

HTML files should have a **.html** extension (**.htm** is allowed).

CSS files should have a **.css** extension.

JavaScript files should have a **.js** extension.

## HTML Entities

Reserved characters in HTML must be replaced with entities:

- < (less than) = **&lt**;
- > (greater than) = **&gt**;

### HTML Character Entities

Some characters are reserved in HTML.

### Non-breaking Space

A commonly used HTML entity is the non-breaking space: **&nbsp**;

A non-breaking space is a space that will not break into a new line.

### Some Useful HTML Character Entities
| Result | Description | Name | Number |
|--------|-------------|------|--------|
| &nbsp; | non-breaking space | ```&nbsp;``` | ```&#160;``` |
| < | less than | ```&lt;``` | ```&#60;``` |
| > | greater than | ```&gt;``` | ```&#62;``` |
| & | ampersand | ```&amp;``` | ```&#38;``` |
| " | double quotation mark | ```&quot;``` | ```&#34;``` |
| ' | single quotation mark | ```&apos;``` | ```&#39;``` |
| ¢ | cent | ```&cent;``` | ```&#162;``` |
| £ | pound | ```&pound;``` | ```&#163;``` |
| ¥ | yen | ```&yen;``` | ```&#165;``` |
| € | euro | ```&euro;``` | ```&#8364;``` |
| © | copyright | ```&copy;``` | ```&#169;``` |
| ® | registered trademark | ```&reg;``` | ```&#174;``` |
| ™ | trademark | ```&trade;``` | ```&#8482;``` |

### Combining Diacritical Marks

A diacritical mark is a "glyph" added to a letter.

| Mark | Character | Construct | Result |
|------|-----------|-----------|--------|
| ̀    | a         | ```a&#768;```   | à     |
| ́    | a         | ```a&#769;```   | á     |
| ̂    | a         | ```a&#770;```   | â     |
| ̃    | a         | ```a&#771;```   | ã     |
| ̀    | O         | ```O&#768;```   | Ò     |
| ́    | O         | ```O&#769;```   | Ó     |
| ̂    | O         | ```O&#770;```   | Ô     |
| ̃    | O         | ```O&#771;```   | Õ     |

## HTML Symbols

### HTML Symbol Entities

Symbols or letters that are not present on your keyboard can be added to HTML using entities.

```HTML
<p>I will display &euro;</p>
<p>I will display &#8364;</p>
<p>I will display &#x20AC;</p>
```

### Some HTML Symbol Entities

| Char | Number   | Entity   | Description          |
|------|----------|----------|----------------------|
| ©    | ```&#169;```   | ```&copy;```   | COPYRIGHT             |
| ®    | ```&#174;```   | ```&reg;```    | REGISTERED TRADEMARK  |
| €    | ```&#8364;```  | ```&euro;```  | EURO SIGN             |
| ™    | ```&#8482;```  | ```&trade;```  | TRADEMARK             |
| ←    | ```&#8592;```  | ```&larr;```   | LEFT ARROW            |
| ↑    | ```&#8593;```  | ```&uarr;```   | UP ARROW              |
| →    | ```&#8594;```  | ```&rarr;```   | RIGHT ARROW           |
| ↓    | ```&#8595;```  | ```&darr;```   | DOWN ARROW            |
| ♠    | ```&#9824;```  | ```&spades;``` | SPADE                 |
| ♣    | ```&#9827;```  | ```&clubs;```  | CLUB                  |
| ♥    | ```&#9829;```  | ```&hearts;``` | HEART                 |
| ♦    | ```&#9830;```  | ```&diams;```  | DIAMOND               |

## Using Emojis in HTML

### What are Emojis?

Emojis look like images, but they are not.

Emojis are letters (characters) from the UTF-8 (Unicode) character set:

😄 😍 💗

| Emoji | Value |
|-------|-------|
| 🗻 | `&#128507;` |
| 🗼 | `&#128508;` |
| 🗽 | `&#128509;` |
| 🗾 | `&#128510;` |
| 🗿 | `&#128511;` |
| 😀 | `&#128512;` |
| 😁 | `&#128513;` |
| 😂 | `&#128514;` |
| 😃 | `&#128515;` |
| 😄 | `&#128516;` |
| 😅 | `&#128517;` |

## HTML Encoding (Character Sets)

### The HTML charset Attribute

To display an HTML page correctly, a web browser must know which character set to use.

The character set is specified in the `<meta>` tag:

```HTML
<meta charset="UTF-8">
```

The HTML specification encourages web developers to use the **UTF-8 character set**.

### The ASCII Character Set

**ASCII was the first** character encoding standard for the web.

It defined **128 different latin characters** that could be used on the internet:

- English letters (a-z and A-Z)
- Numbers (0-9)
- Some special characters: ! $ + - ( ) @ < > . # ?

### The ANSI Character Set

**ANSI (Windows-1252)** was the first Windows character set.

### The ISO-8859-1 Character Set

The default character set for **HTML 4 was ISO-8859-1**.

### The UTF-8 Character Set

- Identical to ASCII for the values from 0 to 127
- Does not use the characters from 128 to 159
- Identical to ANSI and 8859-1 from 160 to 255
- Continues from the value 256 to 10 000 characters

## HTML Uniform Resource Locators

A URL is another word for a web address.

A URL can be composed of words (e.g. w3schools.com), or an Internet Protocol (IP) address (e.g. 192.68.20.50).

### URL - Uniform Resource Locator

Web browsers request pages from web servers by using a URL.

A Uniform Resource Locator (URL) is used to address a document (or other data) on the web.

A web address like https://www.w3schools.com/html/default.asp follows these syntax rules:

```
scheme://prefix.domain:port/path/filename
```

Explanation:

- **scheme** - defines the **type** of Internet service (most common is **http** or **https**)
- **prefix** - defines a domain **prefix** (default for http is www)
- **domain** - defines the Internet **domain name** (like w3schools.com)
- **port** - defines the **port number** at the host (default for http is **80**)
- **path** - defines a **path** at the server (If omitted: the root directory of the site)
- **filename** - defines the name of a document or resource

| Scheme | Short for | Used for |
|--------|-----------|----------|
| http | HyperText Transfer Protocol | Common web pages. Not encrypted |
| https | Secure HyperText Transfer Protocol | Secure web pages. Encrypted |
| ftp | File Transfer Protocol | Downloading or uploading files |
| file | | A file on your computer |

## HTML Versus XHTML

XHTML is a stricter, more XML-based version of HTML.

### What is XHTML?

- XHTML stands for EXtensible HyperText Markup Language
- XHTML is a stricter, more XML-based version of HTML
- XHTML is HTML defined as an XML application
- XHTML is supported by all major browsers
