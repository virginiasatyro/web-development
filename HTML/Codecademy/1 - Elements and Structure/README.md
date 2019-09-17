# Coursera - Introduction to HTML

## 1 ELEMENTS AND STRUCTURES

### Introduction to HTML

#### What is HTML?
HTML is the skeleton of all web pages. It’s often the first language learned by marketers and designers and is core to front-end development work. 
 HTML provides structure to the content appearing on a website, such as images, text, or videos. Right-click on any page on the internet, choose “Inspect,” and you’ll see HTML in a panel of your screen.
HTML stands for HyperText Markup Language:
- A markup language is a computer language that defines the structure and presentation of raw text.
- In HTML, the computer can interpret raw text that is wrapped in HTML elements.
- HyperText is text displayed on a computer or device that provides access to other text through links, also known as hyperlinks. 

Learning HTML is the first step in creating websites, but even a bit of knowledge can help you inject code snippets into newsletter, blog or website templates. As you continue learning, you can layer HTML with CSS and JavaScript to create visually compelling and dynamic websites.

#### HTML Anatomy

HTML is composed of elements. These elements structure the webpage and define its content. The paragraph element is made up of one opening tag (```<p>```), the content (“Hello World!” text), and a closing tag (```</p>```). A tag and the content between it is called an HTML element. There are many tags that we can use to organize and display text and other types of content, like images. 

- **HTML element** (or simply, element) — a unit of content in an HTML document formed by HTML tags and the text or media it contains.
- **HTML Tag** — the element name, surrounded by an opening (<) and closing (>) angle bracket.
- **Opening Tag** — the first HTML tag used to start an HTML element. The tag type is surrounded by opening and closing angle brackets.
- **Content** — The information (text or other elements) contained between the opening and closing tags of an HTML element.
- **Closing tag** — the second HTML tag used to end an HTML element. Closing tags have a forward slash (/) inside of them, directly after the left angle bracket.

#### The Body

One of the key HTML elements we use to build a webpage is the body element. Only content inside the opening and closing body tags can be displayed to the screen. Here’s what opening and closing body tags look like:
```
<body>

</body>
```
Once the file has a body, many different types of content – including text, images, and buttons – can be added to the body.
```
<body>
  <p>What's up, doc?</p>
</body>
```

#### HTML Structure

HTML is organized as a collection of family tree relationships. As you saw in the last exercise, we placed ```<p>``` tags within ```<body>``` tags. When an element is contained inside another element, it is considered the child of that element. The child element is said to be nested inside of the parent element.
```
<body>
  <p>This paragraph is a child of the body</p>
</body>
```

In the example above, the ```<p>``` element is nested inside the ```<body>``` element. The ```<p>``` element is considered a child of the ```<body>``` element, and the ```<body>``` element is considered the parent. You can also see that we’ve added two spaces of indentation (using the space bar) for better readability.

Since there can be multiple levels of nesting, this analogy can be extended to grandchildren, great-grandchildren, and beyond. The relationship between elements and their ancestor and descendent elements is known as hierarchy.

Let’s consider a more complicated example that uses some new tags:
```
<body>
  <div>
    <h1>Sibling to p, but also grandchild of body</h1>
    <p>Sibling to h1, but also grandchild of body</p>
  </div>
</body>
```
In this example, the ```<body>``` element is the parent of the ```<div>``` element. Both the ```<h1>``` and ```<p>``` elements are children of the ```<div>``` element. Because the ```<h1>``` and ```<p>``` elements are at the same level, they are considered siblings and are both grandchildren of the ```<body>``` element.

Understanding HTML hierarchy is important because child elements can inherit behavior and styling from their parent element. You’ll learn more about webpage hierarchy when you start digging into CSS.

#### Headings

Headings in HTML are similar to headings in other types of media. For example, in newspapers, large headings are typically used to capture a reader’s attention. Other times, headings are used to describe content, like the title of a movie or an educational article.

HTML follows a similar pattern. In HTML, there are six different headings, or heading elements. Headings can be used for a variety of purposes, like titling sections, articles, or other forms of content.

The following is the list of heading elements available in HTML. They are ordered from largest to smallest in size.

    <h1> — used for main headings. All other smaller headings are used for subheadings.
    <h2>
    <h3>
    <h4>
    <h5>
    <h6>

The following example code uses a headline intended to capture a reader’s attention. It uses the largest heading available, the main heading element:
```
<h1>BREAKING NEWS</h1>
```
#### Divs 

One of the most popular elements in HTML is the ```<div>``` element. ```<div>``` is short for “division” or a container that divides the page into sections. These sections are very useful for grouping elements in your HTML together.
```
<body>
  <div>
    <h1>Why use divs?</h1>
    <p>Great for grouping elements!</p>
  </div>
</body>
```
```<div>```s can contain any text or other HTML elements, such as links, images, or videos. Remember to always add two spaces of indentation when you nest elements inside of ```<div>```s for better readability.
  
#### Attributes

If we want to expand an element’s tag, we can do so using an attribute. Attributes are content added to the opening tag of an element and can be used in several different ways, from providing information to changing styling. Attributes are made up of the following two parts:

    The name of the attribute
    The value of the attribute

One commonly used attribute is the id. We can use the id attribute to specify different content (such as ```<div>```s) and is really helpful when you use an element more than once. ids have several different purposes in HTML, but for now, we’ll focus on how they can help us identify content on our page.

When we add an id to a ```<div>```, we place it in the opening tag:
```
<div id="intro">
  <h1>Introduction</h1>
</div>
```

#### Displaying Text

If you want to display text in HTML, you can use a paragraph or span:

    Paragraphs (<p>) contain a block of plain text.
    <span> contains short pieces of text or other HTML. They are used to separate small pieces of content that are on the same line as other content.

Take a look at each of these elements in action below:
```
<div>
  <h1>Technology</h1>
</div>
<div>
  <p><span>Self-driving cars</span> are anticipated to replace up to 2 million jobs over the next two decades.</p>
</div>
```
In the example above, there are two different ```<div>```. The second ```<div>``` contains a ```<p>``` with ```<span>Self-driving cars</span>```. This ```<span>``` element separates “Self-driving cars” from the rest of the text in the paragraph.

It’s best to use a ```<span>``` element when you want to target a specific piece of content that is inline, or on the same line as other text. If you want to divide your content into blocks, it’s better to use a ```<div>```.

#### Styling Text

You can also style text using HTML tags. The ```<em>``` tag emphasizes text, while the ```<strong>``` tag highlights important text.

Later, when you begin to style websites, you will decide how you want browsers to display content within ```<em>``` and ```<strong>``` tags. Browsers, however, have built-in style sheets that will generally style these tags in the following ways:

    The <em> tag will generally render as italic emphasis.
    The <strong> will generally render as bold emphasis.

Take a look at each style in action:
```
<p><strong>The Nile River</strong> is the <em>longest</em> river in the world, measuring over 6,850 kilometers long (approximately 4,260 miles).</p>
```
In this example, the ```<strong>``` and ```<em>``` tags are used to emphasize the text to produce the following:

```<p><strong>The Nile River</strong> is the <em>longest</em> river in the world, measuring over 6,850 kilometers long (approximately 4,260 miles).</p>```

As we can see, “The Nile River” is bolded and “longest” is in italics.

#### Unordered Lists

In addition to organizing text in paragraph form, you can also display content in an easy-to-read list.

In HTML, you can use an unordered list tag (```<ul>```) to create a list of items in no particular order. An unordered list outlines individual list items with a bullet point.

The ```<ul>``` element should not hold raw text and won’t automatically format raw text into an unordered list of items. Individual list items must be added to the unordered list using the ```<li>``` tag. The ```<li>``` or list item tag is used to describe an item in a list.
```
<ul>
  <li>Limes</li>
  <li>Tortillas</li>
  <li>Chicken</li>
</ul>
```
In the example above, the list was created using the ```<ul>``` tag and all individual list items were added using ```<li>``` tags.

The output will look like this:
<ul>
  <li>Limes</li>
  <li>Tortillas</li>
  <li>Chicken</li>
</ul>

#### Ordered Lists

Ordered lists (```<ol>```) are like unordered lists, except that each list item is numbered. They are useful when you need to list different steps in a process or rank items for first to last.

You can create the ordered list with the ```<ol>``` tag and then add individual list items to the list using ```<li>``` tags.
```
<ol>
  <li>Preheat the oven to 350 degrees.</li>
  <li>Mix whole wheat flour, baking soda, and salt.</li>
  <li>Cream the butter, sugar in separate bowl.</li>
  <li>Add eggs and vanilla extract to bowl.</li>
</ol>
```
The output will look like this:

<ol>
  <li>Preheat the oven to 350 degrees.</li>
  <li>Mix whole wheat flour, baking soda, and salt.</li>
  <li>Cream the butter, sugar in separate bowl.</li>
  <li>Add eggs and vanilla extract to bowl.</li>
</ol>

#### Images

All of the elements you’ve learned about so far (headings, paragraphs, lists, and spans) share one thing in common: they’re composed entirely of text! What if you want to add content to your web page that isn’t composed of text, like images?

The ```<img>``` tag allows you to add an image to a web page. Most elements require both opening and closing tags, but the ```<img>``` tag is a self-closing tag. Note that the end of the ```<img>``` tag has a forward slash /. Self-closing tags may include or omit the final slash — both will render properly.
```
<img src="image-location.jpg" />
```
The ```<img>``` tag has a required attribute called src. The src attribute must be set to the image’s source, or the location of the image. In this case, the value of src must be the uniform resource locator (URL) of the image. A URL is the web address or local address where a file is stored.

#### Image Alts

Part of being an exceptional web developer is making your site accessible to users of all backgrounds. In order to make the Web more inclusive, we need to consider what happens when assistive technologies such as screen readers come across image tags.

The alt attribute, which means alternative text, brings meaning to the images on our sites. The alt attribute can be added to the image tag just like the src attribute. The value of alt should be a description of the image.
```
<img src="#" alt="A field of yellow sunflowers" />
```
The alt attribute also serves the following purposes:
- If an image fails to load on a web page, a user can mouse over the area originally intended for the image and read a brief description of the image. This is made possible by the description you provide in the alt attribute.
- Visually impaired users often browse the web with the aid of screen reading software. When you include the alt attribute, the screen reading software can read the image’s description out loud to the visually impaired user.
- The alt attribute also plays a role in Search Engine Optimization (SEO), because search engines cannot “see” the images on websites as they crawl the internet. Having descriptive alt attributes can improve the ranking of your site.

If the image on the web page is not one that conveys any meaningful information to a user (visually impaired or otherwise), the alt attribute should be left empty.

#### Videos

In addition to images, HTML also supports displaying videos. Like the ```<img>``` tag, the ```<video>``` tag requires a src attribute with a link to the video source. Unlike the ```<img>``` tag however, the ```<video>``` element requires an opening and a closing tag.
```
<video src="myVideo.mp4" width="320" height="240" controls>
  Video not supported
</video>
```
In this example, the video source (src) is myVideo.mp4. The source can be a video file that is hosted alongside your webpage, or a URL that points to a video file hosted on another webpage.

After the src attribute, the width and height attributes are used to set the size of the video displayed in the browser. The controls attribute instructs the browser to include basic video controls: pause, play and skip.

The text, “Video not supported”, between the opening and closing video tags will only be displayed if the browser is unable to load the video.

#### Review

Let’s review what you’ve learned so far:

- HTML stands for HyperText Markup Language and is used to create the structure and content of a webpage.
- Most HTML elements contain opening and closing tags with raw text or other HTML tags between them.
- HTML elements can be nested inside other elements. The enclosed element is the child of the enclosing parent element.
- Any visible content should be placed within the opening and closing ```<body>``` tags .
- Headings and sub-headings, ```<h1>``` to ```<h6>``` tags, are used to enlarge text.
- ```<p>```, ```<span>``` and ```<div>``` tags specify text or blocks.
- The ```<em>``` and ```<strong>``` tags are used to emphasize text.
- Line breaks are created with the ```<br>``` tag.
- Ordered lists (```<ol>```) are numbered and unordered lists (```<ul>```) are bulleted.
- Images (```<img>```) and videos (```<video>```) can be added by linking to an existing source.

### HTML Document Standards

#### Preparing for HTML

Now that you’ve learned about some of the most common HTML elements, it’s time to learn how to set up an HTML file.

HTML files require certain elements to set up the document properly. You can let web browsers know that you are using HTML by starting your document with a document type declaration.

The declaration looks like this:

```<!DOCTYPE html*>```

This declaration is an instruction, and it must be the first line of code in your HTML document. It tells the browser what type of document to expect, along with what version of HTML is being used in the document. For now, the browser will correctly assume that the html in ```<!DOCTYPE html>``` is referring to HTML5, as it is the current standard.

In the future, however, a new standard will override HTML5. To make sure your document is forever interpreted correctly, always include ```<!DOCTYPE html>``` at the very beginning of your HTML documents.

Lastly, HTML code is always saved in a file with an .html extension.

#### The <html> tag

The ```<!DOCTYPE html>``` declaration provides the browser with two pieces of information (the type of document and the HTML version to expect), but it doesn’t actually add any HTML structure or content.

To create HTML structure and content, we must add opening and closing ```<html>``` tags after declaring ```<!DOCTYPE html>```:

``` 
<!DOCTYPE html>
<html>

</html>
```
Anything between the opening ```<html>``` and closing ```</html>``` tags will be interpreted as HTML code. Without these tags, it’s possible that browsers could incorrectly interpret your HTML code.

#### The Head

So far you’ve done two things to set up the file properly:

- Declared to the browser that your code is HTML with ```<!DOCTYPE html>```
- Added the HTML element (```<html>```) that will contain the rest of your code.

We have added these elements to the Brown Bears page you previously created. Now, let’s also give the browser some information about the page itself. We can do this by adding a <head*> element.

Remember the ```<body>``` tag? The ```<head>``` element is part of this HTML metaphor. It goes above our ```<body>``` element.

The ```<head>``` element contains the metadata for a web page. Metadata is information about the page that isn’t displayed directly on the web page. Unlike the information inside of the ```<body>``` tag, the metadata in the head is information about the page itself. You’ll see an example of this in the next exercise.

The opening and closing head tags typically appear as the first item after your first HTML tag:
```
<head>
</head>
```

#### Page Titles

What kind of metadata about the web page can the ```<head>``` element contain?

If you navigate to the Codecademy catalog and look at the top of your browser, you’ll notice the words Catalog | Codecademy, which is the title of the web page.

A browser’s tab displays the title specified in the ```<title>``` tag. The ```<title>``` tag is always inside of the ```<head>```.
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Coding Journal</title>
  </head>
</html>
```
If we were to open a file containing the HTML code in the example above, the browser would display the words My Coding Journal in the title bar (or in the tab’s title).

#### Where Does the Title Appear?

Good work! Unfortunately, the browser panel used by the Codecademy environment does not have a title bar, so the “Brown Bear” title you wrote in the previous exercise will not be displayed. Outside of the Codecademy environment, however, your title would appear as depicted in the diagram to the right.

So far, we have learned about:
- ```<!DOCTYPE html>```, the declaration specifying the version of HTML for the browser
- The ```<html>``` tags that enclose all of your HTML code
- The ```<head>``` tag that contains the metadata of a webpage, such as its ```<title>```

Next, you will learn about new types of elements that go inside the body.

#### Linking to Other Web Pages

One of the powerful aspects of HTML (and the Internet), is the ability to link to other web pages.
You can add links to a web page by adding an **anchor element** ```<a>``` and including the text of the link in between the opening and closing tags.
```
<a>This Is A Link To Wikipedia</a>
```
Wait a minute! Technically, the link in the example above is incomplete. How exactly is the link above supposed to work if there is no URL that will lead users to the actual Wikipedia page?

The anchor element in the example above is incomplete without the **href attribute**. This attribute stands for **hyperlink reference** and is used to link to a path, or the address to where a file is located (whether it is on your computer or another location). The paths provided to the href attribute are often URLs.
```
<a href="https://www.wikipedia.org/">This Is A Link To Wikipedia</a>
```
In the example above, the href attribute has been set to the value of the URL https://www.wikipedia.org/. The example now shows the correct use of an anchor element.

When reading technical documentation, you may come across the term hyperlink. Not to worry, this is simply the technical term for link. These terms are often used interchangeably.

#### Opening Links in a New Window

Have you ever clicked on a link and observed the resulting web page open in a new browser window? If so, you can thank the ```<a>``` element’s target attribute. The target attribute specifies how a link should open.

It’s possible that one or more links on your web page link to an entirely different website. In that case, you may want users to read the linked website, but hope that they return to your web page. This is exactly when the target attribute is useful!

For a link to open in a new window, the target attribute requires a value of ```_blank```. The target attribute can be added directly to the opening tag of the anchor element, just like the href attribute.
```
<a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank">The Brown Bear</a>
```
In the example above, setting the target attribute to ```_blank``` instructs the browser to open the relevant Wikipedia page in a new window.

In this exercise, we’ve used the terminology “open in a new window.” It’s likely that you are using a modern browser that opens up websites in new tabs, rather than new windows. Before the advent of browsers with tabs, additional browser windows had to be opened to view more websites. The ```target="_blank"``` attribute, when used in modern browsers, will open new websites in a **new tab**.

#### Linking to Relative Page

Thus far you have learned how to link to external web pages. Many sites also link to internal web pages like Home, About, and Contact.

Before we learn how to link between internal pages, let’s establish where our files are stored. When making multi-page static websites, web developers often store HTML files in the root directory, or a main folder where all the files for the project are stored. As the size of the projects you create grows, you may use additional folders within the main project folder to organize your code.
```
project-folder/
|—— about.html
|—— contact.html
|—— index.html
```
The example above shows three different files — about.html, contact.html, and index.html in one folder.

HTML files are often stored in the same folder, as shown in the example above. If the browser is currently displaying index.html, it also knows that about.html and contact.html are in the same folder. Because the files are stored in the same folder, we can link web pages together using a relative path.
```
<a href="./contact.html">Contact</a>
```
In this example, the ```<a>``` tag is used with a relative path to link from the current HTML file to the contact.html file in the same folder. On the web page, Contact will appear as a link.

A relative path is a filename that shows the path to a local file (a file on the same website, such as ./index.html) versus an absolute path (a full URL, like https://www.codecademy.com/learn/learn-html which is stored in a different folder). The ./ in ./index.html tells the browser to look for the file in the current folder.

#### Linking At Will

You’ve probably visited websites where not all links were made up of text. Maybe the links you clicked on were images or some other form of content. So far, we’ve added links that were made up of only text, like the following:
```
<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank">Prickly Pear</a>
```
Text-only links, however, would significantly decrease your flexibility as a web developer!

Thankfully, HTML allows you to **turn nearly any element into a link by wrapping that element with an anchor element**. With this technique, it’s possible to turn images into links by simply wrapping the ```<img>``` element with an ```<a>``` element.

```
<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank"><img src="#" alt="A red prickly pear fruit"/></a>
```
In the example above, an image of a prickly pear has been turned into a link by wrapping the outside of the ```<img>``` element with an ```<a>``` element.

#### Linking to Same Page

At this point, we have all the content we want on our page. Since we have so much content, it doesn’t all fit on the screen. How do we make it easier for a user to jump to different portions of our page? When users visit our site, we want them to be able to click a link and have the page automatically scroll to a specific section.

In order **to link to a target on the same page**, we must give the target an id, like this:
```
<p id="top">This is the top of the page!</p>
<h1 id="bottom">This is the bottom! </h1>
```
In this example, the ```<p>``` element is assigned an id of “top” and the ```<h1>``` element is assigned “bottom.” An id can be added to most elements on a webpage.

An id should be descriptive to make it easier to remember the purpose of a link. The target link is a string containing the # character and the target element’s id.
```
<ol>
  <li><a href="#top">Top</a></li>
  <li><a href="#bottom">Bottom</a></li>
</ol>
```
In the example above, the links to ```<p id="top">``` and ```<h1 id="bottom">``` are embedded in an ordered list. These links appear in the browser as a numbered list of links. An id is especially helpful for organizing content belonging to a div!

#### Whitespace

The rest of this lesson will focus on some tools developers use to make code easier to interpret.

As the code in an HTML file grows, it becomes increasingly difficult to keep track of how elements are related. Programmers use two tools to visualize the relationship between elements: whitespace and indentation.

Both tools take advantage of the fact that the position of elements in a browser is independent of the amount of whitespace or indentation in the index.html file.

For example, if you wanted to increase the space between two paragraphs on your web page, you would not be able to accomplish this by adding space between the paragraph elements in the index.html file. The browser ignores whitespace in HTML files when it renders a web page, so it can be used as a tool to make code easier to read and follow.

What makes the example below difficult to read?
```
<body><p>Paragraph 1</p><p>Paragraph 2</p></body>
```
You have to read the entire line to know what elements are present. Compare the example above to this:
```
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</body>
```
This example is easier to read, because each element is on its own line. While the first example required you to read the entire line of code to identify the elements, this example makes it easy to identify the body tag and two paragraphs.

A browser renders both examples the same way:

Paragraph 1
Paragraph 2

In the next exercise you will learn how to use indentation to help visualize nested elements.

#### Indentation

The second tool web developers use to make the structure of code easier to read is indentation. The spaces are inserted using the space and tab bars on your keyboard.

The **World Wide Web Consortium**, or **W3C**, is responsible for maintaining the style standards of HTML. At the time of writing, the W3C recommends 2 spaces of indentation when writing HTML code. Although your code will work without exactly two spaces, this standard is followed by the majority of professional web developers. Indentation is used to easily visualize which elements are nested within other elements.
```
<body>
  <p>Paragraph 1</p>
  <div>
    <p>Paragraph 2</p>
  </div>
</body>
```
In the example above, Paragraph 1 and the ```<div>``` tag are nested inside of the ```<body>``` tag, so they are indented two spaces. The Paragraph 2 element is nested inside of the ```<div>``` tag, so it is indented an additional two spaces.

#### Comments

HTML files also allow you to add comments to your code. Comments begin with ```<!-- and end with -->```. Any characters in between will be ignored by your browser.
```
<!-- This is a comment that the browser will not display. -->
```
Including comments in your code is helpful for many reasons:
- They help you (and others) understand your code if you decide to come back and review it at a much later date.
- They allow you to experiment with new code, without having to delete old code.
```
<!-- Favorite Films Section -->
<p>The following is a list of my favorite films:</p>
```
In this example, the comment is used to denote that the following text makes up a particular section of the page.
```
<!-- <p> Test Code </p> -->
```
In the example above, a valid HTML element (a paragraph element) has been “commented out.” This practice is useful when there is code you want to experiment with, or return to, in the future.

#### HTML Tags

You now know all of the basic elements and set-up you need to structure an HTML page and add different types of content. With the help of CSS, very soon you’ll be creating beautiful websites!

While some tags have a very specific purpose, such as image and video tags, most tags are used to describe the content that they surround, which **helps us modify and style our content later**. There are seemingly infinite numbers of tags to use (many more than we’ve taught). Knowing when to use each one is based on how you want to describe the content of your HTML. Descriptive, **well-chosen tags are one key to high-quality web development**. A full list of available HTML tags can be found in Mozilla documentation.

Let’s review what you’ve learned this lesson:

- The ```<!DOCTYPE html>``` declaration should always be the first line of code in your HTML files. This lets the browser know what version of HTML to expect.
- The ```<html>``` element will contain all of your HTML code.
- Information about the web page, like the title, belongs within the ```<head>``` of the page.
- You can add a title to your web page by using the ```<title>``` element, inside of the head.
- A webpage’s title appears in a browser’s tab.
- Anchor tags (```<a>```) are used to link to internal pages, external pages or content on the same page.
- You can create sections on a webpage and jump to them using ```<a>``` tags and adding ids to the elements you wish to jump to.
- Whitespace between HTML elements helps make code easier to read while not changing how elements appear in the browser.
- Indentation also helps make code easier to read. It makes parent-child relationships visible.
- Comments are written in HTML using the following syntax: ```<!-- comment -->```.
