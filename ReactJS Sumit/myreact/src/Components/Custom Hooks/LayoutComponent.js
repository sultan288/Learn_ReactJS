import useWindowWidth from './useWindowWidth';

export default function LayoutComponentOne() {
    const onSmallScreen = useWindowWidth(600);
    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} devices</h1>
        </div>
    );
}

// import React, { useEffect, useState } from 'react';

// export default function LayoutComponentOne() {
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
//         <div>
//             <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} devices</h1>
//         </div>
//     );
// }
