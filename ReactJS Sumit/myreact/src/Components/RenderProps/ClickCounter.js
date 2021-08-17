import React from 'react';

export default function ClickCounter({ count, incrementCount }) {
    // const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
}
