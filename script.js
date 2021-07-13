// console.log(React);
// console.log(ReactDOM);

const domContainer = document.querySelector("#root");

const myElement = React.createElement("div", null, "Hello World");

ReactDOM.render("Hello world", domContainer);