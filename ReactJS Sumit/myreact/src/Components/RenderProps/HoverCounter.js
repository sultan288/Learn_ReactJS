import React from 'react';

export default function HoverCounter({ count, incrementCount }) {
    // const { count, incrementCount } = props;
    return (
        <div>
            <h1 type="button" onMouseOver={incrementCount}>
                Hovered {count} times
            </h1>
        </div>
    );
}
