import React from 'react';
import Counter from './Counter';
import TodoCls from './TodoClsCom';
import TodoFn from './TodoFunCom';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TodoFn />
                <TodoCls />
                <Counter />
            </div>
        );
    }
}
