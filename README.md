# TypingTerror

This script contains a function that generates a random string of alphanumeric characters and another function that replaces text nodes within a specified HTML element with random strings.

## Usage

generateRandomString(length)  
This function generates a random string of alphanumeric characters of the specified length and returns it.

### Parameters  

- length (number) - The length of the string to generate.

### Return value

- (string) - A random string of alphanumeric characters.

### replaceTextWithRandom(element, delay)

This function replaces text nodes within the specified HTML element with random strings and waits for the specified amount of time before reverting the changes.

### Parameters  

- element (Node) - The HTML element whose text nodes to replace.
- delay (number) - The time (in milliseconds) to wait before reverting the changes.

### Return value  

- (Promise) - A promise that resolves after the delay time has elapsed.

### getTextNodes(element)

This function retrieves all text nodes within the specified HTML element and its descendants and returns them as an array.

### Parameters

- element (Node) - The HTML element to search for text nodes.

### Return value

- (Node[]) - An array of text nodes within the specified HTML element and its descendants.

### wait(time)

This function returns a promise that resolves after the specified amount of time has elapsed.

### Parameters

- time (number) - The time (in milliseconds) to wait.

### Return value

- (Promise) - A promise that resolves after the specified amount of time has elapsed.

## Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Random String Generator Example</title>
    <script src="random-string-generator.js"></script>
</head>
<body>
    <h1>Random Strings</h1>
    <p>This is some text.</p>
    <p>Here's some more text.</p>
    <script>
        const element = document.querySelector('body');
        replaceTextWithRandom(element, 3000);
    </script>
</body>
</html>

```

In this example, the replaceTextWithRandom function is called with the body element and a delay of 3000 milliseconds (3 seconds). This will replace all text nodes within the body element with random strings and wait 3 seconds before reverting the changes.

## License

This script is licensed under the MIT License. See the LICENSE file for more information.
