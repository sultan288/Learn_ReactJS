import useWindowWidth from './useWindowWidth';

export default function LayoutComponentTwo() {
    const onSmallScreen = useWindowWidth(768);
    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This is another component</h1>
        </div>
    );
}

// Previous code
// ==================================================================
// import React from 'react';
// import { useEffect, useState } from 'react/cjs/react.development';

// export default function LayoutComponentTwo() {
//     const [onSmallScreen, setOnSmallScreen] = useState(false);

//     const checkScreenSize = () => {
//         setOnSmallScreen(window.innerWidth < 748);
//     };

//     useEffect(() => {
//         checkScreenSize();
//         window.addEventListener('resize', checkScreenSize);

//         return () => window.removeEventListener('resize', checkScreenSize);
//     }, []);
//     return (
//         <div className={onSmallScreen ? 'small' : 'large'}>
//             <h1>This is another component</h1>
//         </div>
//     );
// }
