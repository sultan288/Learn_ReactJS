

const domContainer = document.querySelector("#root");
// const myElement = React.createElement("div", null, "Hello World");


const Increment = () => {

    //const reactState = React.useState(0);
    const [counter, setCounter] = React.useState(0);
    //console.log(reactSta te);

    return (
        <div>
            <h1 id="display">{counter}</h1>
            <div>
                <button id="button" onClick={ () => setCounter(counter + 1)}>Increment +</button>
            </div>
        </div>
    );
};
//That we have done in App.js
ReactDOM.render(
    <div>
        <Increment />
        <Increment />
        <Increment />
    </div>,

    domContainer);

// let number = 0;
//
// const display = document.querySelector('#display');
// const button = document.querySelector("#button");
//
// button.addEventListener("click", () => {
//     number++;
//     display.textContent = number;
// });