import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useGSAP(() => {
        window.scrollTo(0, 0);
        gsap.fromTo(
            document.body,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        );
    }, [pathname]);

    return null;
};

export default ScrollToTop;
