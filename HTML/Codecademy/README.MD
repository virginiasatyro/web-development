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

HTML is composed of elements. These elements structure the webpage and define its content. The paragraph element is made up of one opening tag (<p*>), the content (“Hello World!” text), and a closing tag (</p*>). A tag and the content between it is called an HTML element. There are many tags that we can use to organize and display text and other types of content, like images. 

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

HTML is organized as a collection of family tree relationships. As you saw in the last exercise, we placed <p*> tags within <body*> tags. When an element is contained inside another element, it is considered the child of that element. The child element is said to be nested inside of the parent element.
```
<body>
  <p>This paragraph is a child of the body</p>
</body>
```

In the example above, the <p*> element is nested inside the <body*> element. The <p*> element is considered a child of the <body*> element, and the <body*> element is considered the parent. You can also see that we’ve added two spaces of indentation (using the space bar) for better readability.

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
In this example, the <body*> element is the parent of the <div*> element. Both the <h1*> and <p*> elements are children of the <div*> element. Because the <h1*> and <p*> elements are at the same level, they are considered siblings and are both grandchildren of the <body*> element.

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

One of the most popular elements in HTML is the <div*> element. <div*> is short for “division” or a container that divides the page into sections. These sections are very useful for grouping elements in your HTML together.
```
<body>
  <div>
    <h1>Why use divs?</h1>
    <p>Great for grouping elements!</p>
  </div>
</body>
```
<div>s can contain any text or other HTML elements, such as links, images, or videos. Remember to always add two spaces of indentation when you nest elements inside of <div>s for better readability.
  
#### Attributes

If we want to expand an element’s tag, we can do so using an attribute. Attributes are content added to the opening tag of an element and can be used in several different ways, from providing information to changing styling. Attributes are made up of the following two parts:

    The name of the attribute
    The value of the attribute

One commonly used attribute is the id. We can use the id attribute to specify different content (such as <div*>s) and is really helpful when you use an element more than once. ids have several different purposes in HTML, but for now, we’ll focus on how they can help us identify content on our page.

When we add an id to a <div*>, we place it in the opening tag:
```
<div id="intro">
  <h1>Introduction</h1>
</div>
```


### HTML Document Standards

## 2 TABLES

### Tables

## 3 FORMS

### Learn HTML: Forms

### Learn HTML: Form Validation

## 4 LEARN SEMANTIC HTML

### Semantic HTML
