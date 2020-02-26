# HTML5 and CSS Fundamentals

## 1. My first Web page 

### 1.1 Introduction to Module 1

- HyperText Transfer Protocol (HTTP) is the foundation of data communication for the Web.
- HyperText Markup Language (HTML) is the main mark-up language for creating Web pages and information that can be displayed on a Web browser.
- Web addresses or a Uniform Resource Locator (URL) are used to reference a Web page.

### 1.2 The big three: HTML5, CSS and JavaScript

- The 'HTML' part contains all the content, organized into a logical structure.  This is the part that an author might be most concerned with: the words, chapter headings, figures, diagrams, etc.  

- The 'CSS' part (version 3 being current) is all about the presentation or style of the page; what it looks like without too much regard for the specific content.

- The 'JavaScript', or 'JS' for short, part is about the actions a page can take such as interaction with the user, and customizing and changing the page according to any number of parameters.  This is what allows a Web page to be more than just a document, but potentially a Web application, with nearly unlimited possibilities.

### 1.3 Elements, tags and attributes

- The "M" in HTML stands for "Markup", but what does Markup really mean? Essentially, it means to annotate a document with extra information.

- Online editors: [CodePen](https://codepen.io/), [JSBin](https://jsbin.com/).

### 1.4 Character encoding

A character can be any letter, digit or symbol that makes up words and languages.  A character set is a collection of characters (letters and symbols) in a writing system. Each character is assigned a particular number called a code point. These code points are stored in computer memory in the form of bytes. 

Examples of character encodings include:

- ASCII: contains letters, characters and a limited set of symbols and punctuation for the English language
- Windows-1252 (Latin1): Windows character set that supports 256 different code points
- ISO-8859-6: contains letters and symbols based on the Arabic script
- Unicode: contains characters for most living languages and scripts in the world

You should always use the <b>Unicode character encoding UTF-8</b> for your Web pages, and avoid 'legacy' encodings such as ASCII, Windows-1252 and ISO-8859-6 mentioned above. 

```
    <meta charset="utf-8">
```

```
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    ...
    </head>
</html>
```

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Welcome</title>
</head>

<body>
  <p>Welcome to "HTML5 & CSS Fundamentals". The first tag we will be learning about is the
    <html> tag.</p>
</body>

</html>
```

#### How to use character references

All HTML character references can be written using either a name or number. 

If you want to use a named character reference in your source code, use an ampersand symbol '&', followed by the name and a semi-colon. Names are case sensitive. For example, the following represents a no-break space:

```&nbsp;```

There are two types of numeric character reference: ones that use decimal numbers and ones that use hexadecimal numbers.  In each case, the number represents the code point number of the character in Unicode.

If you are using a decimal number, use an ampersand symbol '&' , followed by the symbol '#', then a decimal number and a semi-colon.

```&#160;```

If you are using a hexadecimal number, use an ampersand symbol '&' , followed by the symbols '#x', then a hexadecimal number and a semi-colon.

```&#x00A0;```


For a list of named character references available in HTML, visit:  https://dev.w3.org/html5/html-author/charref.

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Welcome</title>
</head>
    
<body>
    <p>This is © 2015. Breach will entail a fine of € 400</p>
 
  
</body>

</html>
```

### 1.5 Best practices

```
    <h1>Part of this header is<p>in the</h2> paragraph below</p>
```

- What happens in this case is what we call "undefined".

- Proper indentation is one way to make your code clearer and easier to understand:

```
<body>
    <h1>Here is a heading</h1>
    <p>
    <ol>
        <li>List Item 1</li>
    </ol>
    </p>
</body>
```

- Tags are case insensitive;
- Don't worry about too many white spaces;
- Attributes are case sensitive;
```
<p id=ThisOne>
<p id=thisone>
```
- Any kind of quotes for strings. Are equivalent:
```
<p id=MyName>
    
<p id="MyName">
    
<p id='MyName'>
```

#### HTML Style Guides

- jQuery - https://contribute.jquery.org/style-guide/html/
- Google - https://google.github.io/styleguide/htmlcssguide.html

- For validation: https://validator.w3.org/

### 1.6 More on tags

-  ```<!doctype>``` - This tag is special.  In fact, many folks don't even consider it a tag, as it is officially the DTD - Document Type Declaration.  Unlike most tags, it has no closing tag, not even a "/" at the end.  It is there to declare exactly what type of HTML the computer will find in this file. It is used as that: ```<!DOCTYPE html>```.

- ```<html>``` - The html open and close tags wrap around nearly everything in your html file (except the doctype tag).  This essentially contains all of the HTML code in the file, which is generally everything (one big html element). In the next module, we will learn about attributes, and you will learn that you should always add a lang attribute to the html opening tag, to identify the default language of your page.

- ```<head>``` - The head element is where you put information that does not really appear in the body of the work.  For example, the ```<title>``` of the page, which typically appears on the window containing the page, is defined in the head section.

- ```<body>``` - The body section contains all of the content of your page, essentially what the user sees.  This could be text, pictures, links, videos, tables and so on.  In addition to the content, the body usually contains lots of other elements, each indicated by their own tags.

- ```<h1>``` - There are a whole collection of 'h' tags, ```<h1>```, ```<h2>```, ```<h3>``` . . . all the way up to ```<h6>```.  Why there are 6 rather than 5 or 7 may be a bit of a mystery, but there it is.  They're generally used the same way you would use chapter or section headings in a book (don't confuse the h here with the ```<head>``` section, that is completely different).  An ```<h1>``` tag might be used as the title of the document (as it appears on the page, not the same as the aforementioned ```<title>``` element), or to indicate the outermost level in a group of nested sections.

- ```<p>``` - P is for 'paragraph', which is how much of your text information might be arranged.  Depending on the style you are using, text wrapped in a ```<p>``` tag may be indented or have extra vertical white space before starting.  When rendered on the Web page, a p element will typically be a new line.

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Welcome</title>
</head>
    
<body>
 <p>
This is a paragraph.
It may or may not be indented but it but there
should be a line break at the end.
Typically the last line will not stretch as far
to the right as the rest of the lines.
</p>
<p>
Often there is extra space between one paragraph and the next.
</p>
   
</body>

</html>
```

- ```<q>``` - The q tag is for quotes.  This has no relationship to the somewhat confusing single and double quote characters, rather it's used when you want to quote a person or written work in your Web page.  It is customarily displayed using quotation marks, again unrelated to strings. Thus ```<q>Brevity is beautiful</q>``` would be rendered as "Brevity is beautiful".

- ```<blockquote>``` - If you want to quote a larger passage, you may want to use blockquote, which will typically set the quoted text apart from the surrounding text and indent it, to make clear that it is quoted text:

        ```Early to bed and early to rise, makes someone healthy, wealthy and wise - Benjamin Franklin```

- ```<ul>```, ```<ol>``` - These two tags are used to indicate a list of things.  The only difference is that ```<ol>``` is an "ordered" list, meaning the elements are in a particular order, and it might be a good idea to number them.  The "u" in ```<ul>``` stands for "unordered" and is used for a list of things where the order doesn't really matter, so it is usually rendered as a bulleted list, or something else without numbers.

- ```<li>``` - The li element is a "List Item", i.e. one item in the list.  As you might expect, this element only really makes sense nested inside a list (```<ul>``` or ```<ol>```).  In the final rendering, each li element would typically be preceded by a number or bullet, or something similar (but not necessarily).  Thus a list in HTML would be look something like this:
```
    <ul>
       <li> First item in list </li>
       <li> Second item in list </li>
       . . .
    </ul>
```
- ```<hr>``` - This one might be debatable.  HR originally stood for "Horizontal Rule", i.e. a horizontal line across the width of the text.  It's still there in HTML5, but now is officially supposed to represent a "thematic break" in the content.  It would typically look like this:

<hr>

- ```<br>``` - This one signifies a line break.  It is used for any number of purposes.  For example it can be an easy way to make sure that lines of poetry break where they're supposed to (less verbose than requiring each line to be a separate element).  Essentially it helps break the "white space" rule: where spaces and carriage returns are generally treated the same, the ```<br>``` tag is treated as a required carriage return.  Because it's an empty tag (doesn't contain any text or anything, just indicates a particular point in the text), it doesn't really need a close tag, so it can be written as ```<br>```, though ```<br />``` is also acceptable.  Oddly, in the browsers I tried, if you do add a close tag, as in ```<br></br>```, the close tag is interpreted as a regular br tag, thus you get two line breaks in a row.  One other thing to remember is that the ```<br>``` tag implies a break even if there is no break in the text containing it, i.e. these two sentences would be formatted exactly the same.

- ```<pre>``` - This is another tag that helps you break the white space rule.  PRE stands for "PREformatted text", meaning "I've set this up just the way I want it, don't mess with it."  It generally implies a monospace font, and none of the spaces, tabs or carriage-returns are ignored.  It is very handy for illustrating bits of program code, or other "typewritten" material:
```
<pre>
    Page Heading
    And here is the first paragraph
    la la la 
                la la 
        la la
    la 
</pre>
```
<pre>
    Page Heading
    And here is the first paragraph
    la la la 
             la la 
        la la
    la 
</pre>

### 1.7 Exercises - Module 1

### Exercises  This content is graded