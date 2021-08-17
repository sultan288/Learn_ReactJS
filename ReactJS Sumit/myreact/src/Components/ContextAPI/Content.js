import React, { useContext } from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from './lib/ThemeContext';

// export default class Content extends React.Component {
//     componentDidMount() {
//         console.log(this.context);
//     }

//     render() {
//         const { theme, switchTheme } = this.context;
//         return (
//             <div>
//                 <h1>This is content</h1>
//                 <Counter>
//                     {(count, incrementCount) => (
//                         <HoverCounter
//                             count={count}
//                             incrementCount={incrementCount}
//                             theme={theme}
//                             switchTheme={switchTheme}
//                         />
//                     )}
//                 </Counter>
//             </div>
//         );
//     }
// }

// Content.contextType = ThemeContext;

export default function Content() {
    const context = useContext(ThemeContext);
    console.log(context);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h1>This is content</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}

// export default function Content() {
//     const context = useContext(ThemeContext);
//     console.log(context);
//     const { theme, switchTheme } = context;
//     return (
//         <div>
//             <h1>This is content</h1>
//             <Counter>
//                 {(count, incrementCount) => (
//                     <ThemeContext.Consumer>
//                         {({ theme, switchTheme }) => (
//                             <HoverCounter
//                                 count={count}
//                                 incrementCount={incrementCount}
//                                 theme={theme}
//                                 switchTheme={switchTheme}
//                             />
//                         )}
//                     </ThemeContext.Consumer>
//                 )}
//             </Counter>
//         </div>
//     );
// }
