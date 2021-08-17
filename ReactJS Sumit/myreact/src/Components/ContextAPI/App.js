import React from 'react';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import ThemeContext from './lib/ThemeContext';
import Section from './Section';

export default class App extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'dark',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    render() {
        // const { theme } = this.state;
        return (
            <div className="app">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter count={count} incrementCount={incrementCount} /> // this is props.children and we will get this as children
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
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

// export default App;
