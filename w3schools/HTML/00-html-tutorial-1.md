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

### The Picture Element

[HTML - Images - W3Schools.com](https://www.youtube.com/watch?v=FmoYRiepmOE&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=13)

##

##

##
