import React, { useEffect } from 'react';

export const ScrollToTopOnNavigation: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
};