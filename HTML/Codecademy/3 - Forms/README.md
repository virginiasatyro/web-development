# Codecademy - Introduction to HTML

## 3 FORMS

### Learn HTML: Forms

#### Introduction to HTML Forms

Forms are a part of everyday life. When we use a physical form in real life, we write down information and give it to someone to process. Think of the times you’ve had to fill out information for various applications like a job, or a bank account, or dropped off a completed suggestion card — each instance is a form!

Just like a physical form, an HTML ```<form>``` element is responsible for collecting information to send somewhere else. Every time we browse the internet we come into contact with many forms and we might not even realize it. There’s a good chance that if you’re typing into a text field or providing an input, the field that you’re typing into is part of a ```<form>```!

In this lesson, we’ll go over the structure and syntax of a <form> and the many elements that populate it.

#### How a Form Works

We can think of the internet as a network of computers which send and receive information. Computers need an HTTP request to know how to communicate. The HTTP request instructs the receiving computer how to handle the incoming information. More information can be found in our article about HTTP requests.

The ```<form>``` element is a great tool for collecting information, but then we need to send that information somewhere else for processing. We need to supply the ```<form>``` element with both the location of where the ```<form>```‘s information goes and what HTTP request to make. Take a look at the sample ```<form>``` below:
```
<form action="/example.html" method="POST">
</form>
```
In the above example, we’ve created the skeleton for a ```<form>``` that will send information to example.html as a POST request — the action attribute determines where the information is sent and the method attribute is assigned a HTTP verb that is included in the HTTP request. (Note: HTTP verbs like POST do not need to be capitalized for the request to work, but it’s done so out of convention. In the example above we could have written method="post" and it would still work)

The ```<form>``` element can also contain child elements. For instance, it would be helpful to provide a header so that users know what this ```<form>``` is about. We could also add a paragraph to provide even more detail. Let’s see an example of this in code:
```
<form action="/example.html" method="POST">
  <h1>Creating a form</h1>
  <p>Looks like you want to learn how to create an HTML form. Well, the best way to learn is to play around with it.</p>
</form>
```
The example above doesn’t collect any user input, but we’ll do that in the next exercise. For now, let’s practice making the foundation of an HTML ```<form>```!

#### Text Input

If we want to create an input field in our ```<form>```, we’ll need the help of the ```<input>``` element.
The ```<input>``` element has a type attribute which determines how it renders on the web page and what kind of data it can accept.

The first value for the type attribute we’re going to explore is **"text"**. When we create an ```<input>``` element with **type="text"**, it renders a text field that users can type into. It’s also important that we include a name attribute for the ```<input>``` — without the name attribute, information in the ```<input>``` won’t be sent when the ```<form>``` is submitted. We’ll explain more about submissions and the submit button in a later exercise. For now, let’s examine the following code that produces a text input field:
```
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field">
</form>
```
Here’s a screen shot of how the rendered form looks like on a web page for the Chrome browser (different browsers have different default rendering). When initially loaded, it will be an empty box:
rendered empty text field from input element **type='text'**.

After users type into the ```<input>``` element, the value of the value attribute becomes what is typed into the text field. The value of the value attribute is paired with the value of the name attribute and sent as text when the form is submitted. For instance, if a user typed in “important details” in the text field created by our `<input>` element: rendered filled text field which reads 'important details'

When the form is submitted, the text: "first-text-field=important details" is sent to /example.html because the value of the name attribute is "first-text-field" and the value of value is "important details".

We could also assign a default value for the value attribute so that users have a pre-filled text field when they first see the rendered form like so:
```
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field" value="already pre-filled">
</form>
```
Which renders:
pre-filled text box due to assigned `value` attribute

#### Adding a Label

In the previous exercise we created an `<input>` element but we didn’t include anything to explain what the `<input>` is used for. For a user to properly identify an `<input>` we use the appropriately named `<label>` element.

The `<label>` element has an opening and closing tag and displays text that is written between the opening and closing tags. To associate a `<label>` and an `<input>`, the `<input>` needs an id attribute. We then assign the for attribute of the `<label>` element with the value of the id attribute of `<input>`, like so:
```
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <br>
  <input type="text" name="food" id="meal">
</form>
```
The code above renders:
`rendered form with labeled text field`

Look, now users know what the `<input>` element is for! Another benefit for using the `<label>` element is when this element is clicked, the corresponding `<input>` is highlighted/selected.


### Learn HTML: Form Validation
