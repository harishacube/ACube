import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
    return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
    const formRef = useRef(null);

    const scrollToForm = () => {
        const offset = -85; // Adjust this value as needed
        const top = formRef.current.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <ScrollContext.Provider value={{ formRef, scrollToForm }}>
            {children}
        </ScrollContext.Provider>
    );
};
