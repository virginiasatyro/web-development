# HTML Forms

## HTML Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

### The `<form>` Element

The HTML `<form>` element is used to create an HTML form for user input:

The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

### The `<input>` Element

The HTML `<input>` element is the most used form element.

An `<input>` element can be displayed in many ways, depending on the type attribute.

| Type | Description |
|------|-------------|
| `<input type="text">` | Displays a single-line text input field |
| `<input type="radio">` | Displays a radio button (for selecting one of many choices) |
| `<input type="checkbox">` | Displays a checkbox (for selecting zero or more of many choices) |
| `<input type="submit">` | Displays a submit button (for submitting the form) |
| `<input type="button">` | Displays a clickable button |

### Text Fields

```HTML
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

### The `<label>` Element

Notice the use of the `<label>` element in the example above.

The `<label>` tag defines a label for many form elements.

The `<label>` element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focuses on the input element.

The `<label>` element also helps users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the `<label>` element, it toggles the radio button/checkbox.

The for attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.

### Radio Buttons

```HTML
<p>Choose your favorite Web language:</p>

<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>
```

### Checkboxes

```HTML
<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>
```

### The Submit Button

```HTML
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```

### The Name Attribute for `<input>`

Notice that each input field must have a `name` attribute to be submitted.

If the `name` attribute is omitted, the value of the input field will not be sent at all.

```HTML
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" value="John"><br><br>
  <input type="submit" value="Submit">
</form>
```
 
[HTML - Forms - W3Schools.com](https://www.youtube.com/watch?v=VLeERv_dR6Q&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&index=22)

## HTML Form Attributes

### The Action Attribute

The `action` attribute defines the action to be performed when the form is submitted.

Usually, the form data is sent to a file on the server when the user clicks on the submit button.

In the example below, the form data is sent to a file called "action_page.php". This file contains a server-side script that handles the form data:

```HTML
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```

### The Target Attribute

The target attribute specifies where to display the response that is received after submitting the form.

The target attribute can have one of the following values:

| Value | Description |
|-------|-------------|
| `_blank` | The response is displayed in a new window or tab |
| `_self` | The response is displayed in the current window |
| `_parent` | The response is displayed in the parent frame |
| `_top` | The response is displayed in the full body of the window |
| `framename` | The response is displayed in a named iframe |

```HTML
<form action="/action_page.php" target="_blank">
```

### The Method Attribute

The `method` attribute specifies the HTTP method to be used when submitting the form data.

The form-data can be sent as URL variables (with `method="get"`) or as HTTP post transaction (with `method="post"`).

The default HTTP method when submitting form data is GET. 

```HTML
<form action="/action_page.php" method="get">
<form action="/action_page.php" method="post">
```

### The Autocomplete Attribute

The `autocomplete` attribute specifies whether a form should have autocomplete on or off.

When autocomplete is on, the browser automatically complete values based on values that the user has entered before.

```HTML
<form action="/action_page.php" autocomplete="on">
```

### The Novalidate Attribute

The `novalidate` attribute is a boolean attribute.

When present, it specifies that the form-data (input) should not be validated when submitted.

```HTML
<form action="/action_page.php" novalidate>
```

### List of All <form> Attributes

| Attribute | Description |
|-----------|-------------|
| `accept-charset` | Specifies the character encodings used for form submission |
| `action` | Specifies where to send the form-data when a form is submitted |
| `autocomplete` | Specifies whether a form should have autocomplete on or off |
| `enctype` | Specifies how the form-data should be encoded when submitting it to the server (only for method="post") |
| `method` | Specifies the HTTP method to use when sending form-data |
| `name` | Specifies the name of the form |
| `novalidate` | Specifies that the form should not be validated when submitted |
| `rel` | Specifies the relationship between a linked resource and the current document |
| `target` | Specifies where to display the response that is received after submitting the form |

## HTML Form Elements

### The HTML `<form>` Elements

The HTML `<form>` element can contain one or more of the following form elements:

- `<input>`
- `<label>`
- `<select>`
- `<textarea>`
- `<button>`
- `<fieldset>`
- `<legend>`
- `<datalist>`
- `<output>`
- `<option>`
- `<optgroup>`

### The `<input>` Element

```HTML
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname">
```

### The `<label>` Element

The `<label>` element defines a label for several form elements.

### The `<select>` Element

```HTML
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

### The `<textarea>` Element

```HTML
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

### The `<button>` Element

```HTML
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```

### The `<fieldset>` and `<legend>` Elements

```HTML
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```

### The `<datalist>` Element

```HTML
<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>
```

### The `<output>` Element

```HTML
<form action="/action_page.php"
  oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range"  id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>
```

### HTML Form Elements

| Tag | Description |
|-----|-------------|
| `<form>` | Defines an HTML form for user input |
| `<input>` | Defines an input control |
| `<textarea>` | Defines a multiline input control (text area) |
| `<label>` | Defines a label for an `<input>` element |
| `<fieldset>` | Groups related elements in a form |
| `<legend>` | Defines a caption for a `<fieldset>` element |
| `<select>` | Defines a drop-down list |
| `<optgroup>` | Defines a group of related options in a drop-down list |
| `<option>` | Defines an option in a drop-down list |
| `<button>` | Defines a clickable button |
| `<datalist>` | Specifies a list of pre-defined options for input controls |
| `<output>` | Defines the result of a calculation |

## HTML Input Types

### HTML Input Types

Here are the different input types you can use in HTML:

- `<input type="button">`
- `<input type="checkbox">`
- `<input type="color">`
- `<input type="date">`
- `<input type="datetime-local">`
- `<input type="email">`
- `<input type="file">`
- `<input type="hidden">`
- `<input type="image">`
- `<input type="month">`
- `<input type="number">`
- `<input type="password">`
- `<input type="radio">`
- `<input type="range">`
- `<input type="reset">`
- `<input type="search">`
- `<input type="submit">`
- `<input type="tel">`
- `<input type="text">`
- `<input type="time">`
- `<input type="url">`
- `<input type="week">`

## HTML Input Attributes

- `value` 
- `readonly` 
- `disabled` 
- `size` 
- `maxlength` 
- `min`, `max` 
- `multiple` 
- `pattern` 
- `placeholder` 
- `required` 
- `step` 
- `autofocus` 
- `height`, `width` 
- `list`
- `autocomplete` 

## HTML Input form* Attributes

- `formaction`
- `formenctype` 
- `formmethod` 
- `formtarget` 
- `formnovalidate` 
- `novalidate`