import { useEffect, useState } from 'react';

export default function MyComponentFn() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        console.log('udpate uEf');
        document.title = `Clicked ${count} times`;
        setInterval(tick, 1000);
    }, [count]);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}
