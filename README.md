# react-mark-filter

Code from [Yogesh Chavan newsletter](https://yogeshchavan.dev/) [9/4/2021] Quick Tip:

```
Do you know that for the string replace method in JavaScript you can pass a replacer function as a second parameter?
Using the replacer function combined with the HTML mark tag you can implement the text highlight functionality in JavaScript.
The HTML mark tag adds a yellow background to the highlighted text which is easy to identify the matching text.

const pattern = new RegExp('united', 'gi');
const country = "United States";
const replaced = country.replace(pattern, (match) => {
return `<mark>${match}</mark>`;
});
console.log(replaced); // <mark>United</mark> States
```

# get started

```
npm i
npm start
```
