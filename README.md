# parseColor

A small (~5kb) function for parsing various valid CSS color formats and turning them into RGBA values.

The function will return an object that looks like this:

```
{ r: 255, g: 0, b: 0, a: 1 }
```

The returned object's properties will always have the correct range (ie. 0-255) and precision (ie. r/g/b will be integers, alpha value will have 0-2 decimal places).

Some examples of valid inputs:

* red
* #f00
* #ff0000
* #ff0000ff
* rgb(255, 0, 0)
* rgb(100%, 0%, 0%)
* rgba(255, 0, 0, 1)
* rgba(100%, 0%, 0%, 1)
* hsl(0, 100%, 50%)
* hsla(0, 100%, 50%, 1)

If the input cannot be parsed, the returned color will be transparent (ie. <code>{ r: 0, g: 0, b: 0, a: 0 }</code>).

## How to use

Include the script in your page, then call the function:

```
var myColour = parseColor("red");
console.log(myColour); // { r: 255, g: 0, b: 0, a: 1 }
```
