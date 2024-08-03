import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
    return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
    const formRef = useRef(null);

    const scrollToForm = () => {
        if (formRef.current) {
            const offset = -80; // Adjust this value as needed to ensure the section starts at the top
            const top = formRef.current.offsetTop + offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <ScrollContext.Provider value={{ formRef, scrollToForm }}>
            {children}
        </ScrollContext.Provider>
    );
};
