import React, { useState, useEffect } from 'react';
import arrowTop from '../images/scroll-top.svg'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <div className="scroll-to-top-wrapper">
                <img
                    src={arrowTop}
                    alt="scroll-to-top"
                    onClick={scrollToTop}
                    loading="lazy"
                    width="30px"
                    height="30px"
                    className="scroll-to-top img-fluid"
                />
            </div>
        )
    );
};

export default ScrollToTop;
