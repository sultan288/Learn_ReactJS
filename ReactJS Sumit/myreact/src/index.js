import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import App from './Components/ContextAPI/App';
import App from './Components/RouterDom/App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));

// function Clock({ locale }) {
//     return <h1 className="heading">Hello {new Date().toLocaleTimeString(locale)}</h1>;
// }
// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));

// ReactDOM.render(Clock(), document.getElementById('root'));

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const element = React.createElement('h1', {className: 'heading'}, 'Hello World!');

// const index = 0;
// const element = (
//     <h1 className="heading" tabIndex={index}>
//         <span className="text">Hello World</span>
//         <img src="" alt="" />
//     </h1>
// );
// ReactDOM.render(element, document.getElementById('root'));

// setInterval(() => {
//     const element = <h1 className="heading">Hello {new Date().toLocaleTimeString()}</h1>;

//     ReactDOM.render(element, document.getElementById('root'));
// }, 1000);

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
