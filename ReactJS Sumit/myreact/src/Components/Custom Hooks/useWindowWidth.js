import { useEffect, useState } from 'react';

const useWindowWidth = (screenSize) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = () => {
        setOnSmallScreen(window.innerWidth < screenSize);
    };
    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [checkScreenSize, screenSize]);

    return onSmallScreen;
};

export default useWindowWidth;

// import { useEffect, useState } from 'react';

// const useWindowWidth = (screenSize) => {
//     const [onSmallScreen, setOnSmallScreen] = useState(false);

//     useEffect(() => {
//         const checkScreenSize = () => {
//             setOnSmallScreen(window.innerWidth < screenSize);
//         };
//         checkScreenSize();
//         window.addEventListener('resize', checkScreenSize);

//         return () => window.removeEventListener('resize', checkScreenSize);
//     }, [screenSize]);

//     return onSmallScreen;
// };

// export default useWindowWidth;
