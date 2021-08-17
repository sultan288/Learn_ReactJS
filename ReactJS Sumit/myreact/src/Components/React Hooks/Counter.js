import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    // If we use previous state we will use prevState function like this
    return (
        <div>
            {count}
            <p>
                <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
                    Add 1
                </button>
            </p>
        </div>
    );

    // If we use previous state we dont use direct value;

    // return (
    //     <div>
    //         {count}
    //         <p>
    //             <button type="button" onClick={() => setCount(count + 1)}>
    //                 Add 1
    //             </button>
    //         </p>
    //     </div>
    // );
}

export default Counter;
