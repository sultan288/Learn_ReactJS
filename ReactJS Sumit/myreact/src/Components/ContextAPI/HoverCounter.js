import React from 'react';

export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    // const { count, incrementCount } = props;
    const style = theme === 'dark' ? { backgroundColor: 'black', color: 'white' } : null;
    return (
        <div>
            <h1 type="button" onMouseOver={incrementCount} style={style}>
                Hovered {count} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}
