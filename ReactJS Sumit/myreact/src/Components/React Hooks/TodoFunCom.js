import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');
    const [todos, setTodos] = useState({
        title: '',
        description: '',
    });

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedwarning = inputValue.includes('.js')
            ? 'You need JS skull to complete this task'
            : null;

        setTodo(inputValue);
        setWarning(updatedwarning);
    };
    const { title, description } = todos;
    return (
        <div>
            <h3>{title}</h3>
            <p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTodos({ ...todos, title: e.target.value })}
                />
            </p>
            <p>
                <h3>{description}</h3>
                <textarea
                    name="todos"
                    value={description}
                    onChange={(e) => setTodos({ ...todos, description: e.target.value })}
                />
            </p>
            <hr />
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <h2>{warning || 'Good Choice'}</h2>
        </div>
    );
}
