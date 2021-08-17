// import Clock from './Components/Clock';
// import ClockList from './Components/ClockList';
// import Form from './Components/Form';
// import Calculator from './Components/Calculator';
// import Text from './Components/Inheritance/Text';
// import Bracket from './Components/Composition/Bracket';
// import Emoji from './Components/Composition/Emoji';
// import Text from './Components/Composition/Text';
import ClickCounter from './Components/RenderProps/ClickCounter';
import Counter from './Components/RenderProps/Counter';
import HoverCounter from './Components/RenderProps/HoverCounter';

function App() {
    return (
        <div className="app">
            <Counter
                render={(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            />
            <Counter
                render={(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            />
        </div>
    );
}

export default App;

// function App() {
//     return (
//         <Emoji>
//             {({ addEmoji }) => (
//                 <Bracket>
//                     {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
//                 </Bracket>
//             )}
//         </Emoji>
//     );
// }

// export default App;
