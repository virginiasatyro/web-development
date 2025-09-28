# HTML Tutorial

## HTML Images

### HTML Images 

Images can improve the design and the appearance of a web page.

```HTML
<img src="img_girl.jpg" alt="Girl in a jacket">

<img src="img_chania.jpg" alt="Flowers in Chania">

<img src="img_chania.jpg" alt="Flowers in Chania" width="460" height="345">
```

#### HTML Images Syntax

The HTML ```<img>``` tag is used to embed an image in a web page.

Images are not technically inserted into a web page; images are linked to web pages. The ```<img>``` tag creates a holding space for the referenced image.

The ```<img>``` tag has two required attributes:

- ```src``` - Specifies the path to the image
- ```alt``` - Specifies an alternate text for the image

#### The src Attribute

The required ```src``` attribute specifies the path (URL) to the image.

The broken link icon and the ```alt``` text are shown if the browser cannot find the image.

#### The alt Attribute

```HTML
<img src="img_chania.jpg" alt="Flowers in Chania">
```

#### Image Size - Width and Height

You can use the ```style``` attribute to specify the width and height of an image.

```HTML
<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">

<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```

#### Width and Height, or Style?

The ```width```, ```height```, and ```style``` attributes are all valid in HTML.

However, *we suggest* using the ```style``` attribute. It prevents styles sheets from changing the size of images:

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
img {
  width: 100%;
}
</style>
</head>
<body>

<img src="html5.gif" alt="HTML5 Icon" width="128" height="128">

<img src="html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">

</body>
</html>
```

#### Images in Another Folder

```HTML
<img src="/images/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">
```

#### Images on Another Server/Website

```HTML
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
```

#### Animated Images

```HTML
<img src="programming.gif" alt="Computer Man" style="width:48px;height:48px;">
```

#### Image as a Link

```HTML
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```

#### Image Floating

Use the CSS float property to let the image float to the right or to the left of a text:

```HTML
<h2>Floating Images</h2>
<p><strong>Float the image to the right:</strong></p>

<p>
<img src="smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
A paragraph with a floating image. A paragraph with a floating image. A paragraph with a floating image.
</p>

<p><strong>Float the image to the left:</strong></p>
<p>
<img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
A paragraph with a floating image. A paragraph with a floating image. A paragraph with a floating image.  
</p>
```

#### Chapter Summary

- Use the HTML ```<img>``` element to define an image
- Use the HTML ```src``` attribute to define the URL of the image
- Use the HTML ```alt``` attribute to define an alternate text for an image, if it cannot be displayed
- Use the HTML ```width``` and ```height``` attributes or the CSS ```width``` and ```height``` properties to define the size of the image
- Use the CSS ```float``` property to let the image float to the left or to the right

#### HTML Image Tags

| Tag      | Description                                         |
|----------|-----------------------------------------------------|
| `<img>`  | Defines an image                                    |
| `<map>`  | Defines an image map                                |
| `<area>` | Defines a clickable area inside an image map        |
| `<picture>` | Defines a container for multiple image resources |

### HTML Image Maps

With HTML image maps, you can create clickable areas on an image.

#### Image Maps

The HTML ```<map>``` tag defines an image map. An image map is an image with clickable areas. The areas are defined with one or more ```<area>``` tags.

```HTML
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <!-- each specific shape leads to a different page -->
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```

#### The Image

The image is inserted using the ```<img>``` tag. The only difference from other images is that you must add a ```usemap``` attribute:

```HTML
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">
```

The ```usemap``` value starts with a hash tag ```#``` followed by the name of the image map, and is used to create a relationship between the image and the image map.

#### Create Image Map

Then, add a ```<map>``` element.

The ```<map>``` element is used to create an image map, and is linked to the image by using the required ```name``` attribute:

```HTML
<map name="workmap">
```

#### The Areas

Then, add the clickable areas.

A clickable area is defined using an ```<area>``` element.

##### Shape

You must define the shape of the clickable area, and you can choose one of these values:

- ```rect``` - defines a rectangular region
- ```circle``` - defines a circular region
- ```poly``` - defines a polygonal region
- ```default``` - defines the entire region

##### Shape="rect", Shape="circle", Shape="poly"

The coordinates for ```shape="rect"``` come in pairs, one for the x-axis and one for the y-axis.

So, the coordinates ```34,44``` is located 34 pixels from the left margin and 44 pixels from the top.

```HTML
<area shape="rect" coords="34, 44, 270, 350" href="computer.htm">

<area shape="circle" coords="337, 300, 44" href="coffee.htm">

<area shape="poly" coords="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147" href="croissant.htm">
```

#### Image Map and JavaScript

A clickable area can also trigger a JavaScript function.

Add a ```click``` event to the ```<area>``` element to execute a JavaScript function:

```HTML
<map name="workmap">
  <area shape="circle" coords="337,300,44" href="coffee.htm" onclick="myFunction()">
</map>

<script>
function myFunction() {
  alert("You clicked the coffee cup!");
}
</script>
```

#### Chapter Summary

- Use the HTML ```<map>``` element to define an image map
- Use the HTML ```<area>``` element to define the clickable areas in the image map
- Use the HTML ```usemap``` attribute of the ```<img>``` element to point to an image map

### Background Images

A background image can be specified for almost any HTML element.

#### Background Image on an HTML element

```HTML
<style>
p {
  background-image: url('img_girl.jpg');
}
</style>
```

#### Background Image on a Page

```HTML
<style>
body {
  background-image: url('img_girl.jpg');
}
</style>
```

#### Background Repeat

```HTML
<style>
body {
  background-image: url('example_img_girl.jpg');
}
</style>
```

```HTML
<!-- image wont repeat -->
<style>
body {
  background-image: url('example_img_girl.jpg');
  background-repeat: no-repeat;
}
</style>
```

#### Background Cover

```HTML
<style>
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
```

#### Background Stretch

Try resizing the browser window, and you will see that the image will stretch, but always cover the entire element.

```HTML
<style>
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>
```

### The ```<picture>``` Element

The HTML ```<picture>``` element gives web developers more flexibility in specifying image resources.

The ```<picture>``` element contains one or more ```<source>``` elements, each referring to different images through the ```srcset``` attribute. This way the browser can choose the image that best fits the current view and/or device.

Each ```<source>``` element has a ```media``` attribute that defines when the image is the most suitable.

```HTML
<!-- Show different images for different screen sizes: -->
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture>
```

#### When to use the Picture Element

There are two main purposes for the ```<picture>``` element:

##### 1. Bandwidth

If you have a small screen or device, it is not necessary to load a large image file. The browser will use the first ```<source>``` element with matching attribute values, and ignore any of the following elements.

##### 2. Format Support

Some browsers or devices may not support all image formats. By using the ```<picture>``` element, you can add images of all formats, and the browser will use the first format it recognizes, and ignore any of the following elements.

```HTML
<!-- The browser will use the first image format it recognizes: -->
<picture>
  <source srcset="img_avatar.png">
  <source srcset="img_girl.jpg">
  <img src="img_beatles.gif" alt="Beatles" style="width:auto;">
</picture>
```

[HTML - Images - W3Schools.com](https://www.youtube.com/watch?v=FmoYRiepmOE&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=13)

## HTML Favicon

A **favicon** is a small image displayed next to the page title in the browser tab.

### How To Add a Favicon in HTML

You can use any image you like as your favicon. You can also create your own favicon on sites like https://www.favicon.cc. A favicon is a small image, so it should be a simple image with high contrast.

A common name for a favicon image is "favicon.ico".

```HTML
<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

## HTML Page Title

Every web page should have a page title to describe the meaning of the page.

### The Title Element

The ```<title>``` element adds a title to your page:

```HTML
<!DOCTYPE html>
<html>
<head>
  <title>HTML Tutorial</title>
</head>
<body>

The content of the document......

</body>
</html>
```

### What is a Good Title?

The title should describe the content and the meaning of the page.

The ```<title>``` element:

- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites
- displays a title for the page in search engine-results

## HTML Tables

### HTML Tables

HTML tables allow web developers to arrange data into rows and columns.

#### Define an HTML Table

```HTML
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```

#### Table Cells

Each table cell is defined by a ```<td>``` (table data) and a ```</td>``` tag.

#### Table Rows

Each table row starts with a ```<tr>``` (table row) and ends with a ```</tr>``` tag.

#### HTML Table Tags

| Tag         | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `<table>`   | Defines a table                                                             |
| `<th>`      | Defines a header cell in a table                                            |
| `<tr>`      | Defines a row in a table                                                    |
| `<td>`      | Defines a cell in a table                                                   |
| `<caption>` | Defines a table caption                                                     |
| `<colgroup>`| Specifies a group of one or more columns in a table for formatting          |
| `<col>`     | Specifies column properties for each column within a `<colgroup>` element   |
| `<thead>`   | Groups the header content in a table                                        |
| `<tbody>`   | Groups the body content in a table                                          |
| `<tfoot>`   | Groups the footer content in a table                                        |

[HTML - ImTables - W3Schools.com](https://www.youtube.com/watch?v=e62D-aayveY&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=14)

### HTML Table Borders

HTML tables can have borders of different styles and shapes.

#### How To Add a Border

To add a border, use the CSS ```border``` property on ```table```, ```th```, and ```td``` elements:

```CSS
table, th, td {
  border: 1px solid black;
}
```

#### Collapsed Table Borders

To avoid having double borders like in the example above, set the CSS ```border-collapse``` property to ```collapse```.

This will make the borders collapse into a single border:

```CSS
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
```

#### Style Table Borders

If you set a background color of each cell, and give the border a white color (the same as the document background), you get the impression of an invisible border:

```CSS
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  background-color: #96D4D4;
}
```

#### Round Table Borders

```CSS
table, th, td {
  border: 1px solid black;
  border-radius: 10px;
}
```

```CSS
<!-- Skip the border around the table by leaving out table from the css selector: -->
th, td {
  border: 1px solid black;
  border-radius: 10px;
}
```

#### Dotted Table Borders

With the ```border-style``` property, you can set the appearance of the border: ```dotted```, ```dashed```, ```solid```, ```double```, ```groove```, ```ridge```, ```inset```, ```outset```, ```none```, ```hidden```.

#### Border Color

```CSS
 th, td {
  border-color: #96D4D4;
}
```

### HTML Table Sizes

HTML tables can have different sizes for each column, row or the entire table.

#### HTML Table Width

```HTML
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

Note: Using a **percentage as the size unit for a width means how wide will this element be compared to its parent element**, which in this case is the ```<body>``` element.

#### HTML Table Column Width

```HTML
<h2>Set the first column to 70% of the table width</h2>

<table style="width:100%">
  <tr>
    <th style="width:70%">Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

#### HTML Table Row Height

```HTML
<!-- Set the height of the second row to 200 pixels: -->
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr style="height:200px">
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

### HTML Table Headers

HTML tables can have headers for each column or row, or for many columns/rows.

#### HTML Table Headers

Table headers are defined with ```th``` elements. Each ```th``` element represents a table cell.

```HTML
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
``` 

#### Vertical Table Headers

To use the first column as table headers, define the first cell in each row as a ```<th>``` element:

```HTML
<table>
  <tr>
    <th>Firstname</th>
    <td>Jill</td>
    <td>Eve</td>
  </tr>
  <tr>
    <th>Lastname</th>
    <td>Smith</td>
    <td>Jackson</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>94</td>
    <td>50</td>
  </tr>
</table>
```

#### Align Table Headers

By default, table headers are bold and centered. To left-align the table headers, use the CSS ```text-align``` property:

```CSS
th {
  text-align: left;
}
```

#### Header for Multiple Columns

You can have a header that spans over two or more columns. To do this, use the ```colspan``` attribute on the ```<th>``` element:

```HTML
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

#### Table Caption

You can add a caption that serves as a heading for the entire table. To add a caption to a table, use the ```<caption>``` tag:

```HTML
<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>
```

### HTML Table Padding & Spacing

HTML tables can adjust the padding inside the cells, and also the space between the cells.

#### HTML Table - Cell Padding

Cell padding is the space between the cell edges and the cell content. By default the padding is set to 0.

To add padding on table cells, use the CSS ```padding``` property:

```CSS
th, td {
  padding: 15px;
}
```

```CSS
th, td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}
```

#### HTML Table - Cell Spacing

Cell spacing is the space between each cell. By default the space is set to 2 pixels.

To change the space between table cells, use the CSS ```border-spacing``` property on the ```table``` element:

```CSS
table {
  border-spacing: 30px;
}
```

### HTML Table Colspan & Rowspan

HTML tables can have cells that span over multiple rows and/or columns.

#### HTML Table - Colspan

To make a cell span over multiple columns, use the ```colspan``` attribute:

```HTML
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>
```

#### HTML Table - Rowspan

To make a cell span over multiple rows, use the ```rowspan``` attribute:

```CSS
<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
</tr>
</table>
```

### HTML Table Styling

Use CSS to make your tables look better.

#### HTML Table - Zebra Stripes

```CSS
/* To style every other table row element, use the :nth-child(even) selector like this: */
tr:nth-child(even) {
  background-color: #D6EEEE;
}
```

#### HTML Table - Vertical Zebra Stripes

```CSS
/* Set the :nth-child(even) for table data elements like this: */
td:nth-child(even), th:nth-child(even) {
  background-color: #D6EEEE;
}
```

#### Horizontal Dividers

```CSS
tr {
  border-bottom: 1px solid #ddd;
}
```

#### Hoverable Table

```CSS
/* Use the :hover selector on tr to highlight table rows on mouse over: */
tr:hover {background-color: #D6EEEE;}
```

### HTML Table Colgroup

The ```<colgroup>``` element is used to style specific columns of a table.

#### HTML Table Colgroup

```CSS
<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
...
```

#### Legal CSS Properties

There is only a very limited selection of CSS properties that are allowed to be used in the colgroup:

- ```width``` property 
- ```visibility``` property
- ```background``` properties
- ```border``` properties

#### Multiple Col Elements

```CSS
/* If you want to style multiple columns with different styles, use more than one <col> element inside the <colgroup>: */
<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE">
    <col span="3" style="background-color: pink">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
...
```

#### Empty Colgroups

```CSS
/* If you want to style columns in the middle of a table, insert an "empty" <col> element (with no styles) for the columns before: */
<table>
  <colgroup>
    <col span="3">
    <col span="2" style="background-color: pink">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
...
```

#### Hide Columns

```CSS
/* You can hide columns with the visibility: collapse property: */
<table>
  <colgroup>
    <col span="2">
    <col span="3" style="visibility: collapse">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
...
```