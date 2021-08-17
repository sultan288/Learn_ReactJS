import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {
    return (
        <div className="app">
            <Counter>
                {(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} /> // this is props.children and we will get this as children
                )}
            </Counter>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

// function App() {
//     return (
//         <div className="app">
//             <Counter
//                 render={(count, incrementCount) => (
//                     <ClickCounter count={count} incrementCount={incrementCount} />
//                 )}
//             />
//             <Counter
//                 render={(count, incrementCount) => (
//                     <HoverCounter count={count} incrementCount={incrementCount} />
//                 )}
//             />
//         </div>
//     );
// }

export default App;
