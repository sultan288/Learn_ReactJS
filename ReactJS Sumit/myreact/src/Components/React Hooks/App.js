import React from 'react';
// import Counter from './Counter';
// import TodoCls from './TodoClsCom';
// import TodoFn from './TodoFunCom';
import MyComponent from './MyComponentCls';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <MyComponent />
            </div>
        );
    }
}
