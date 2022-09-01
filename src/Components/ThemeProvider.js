import React, { useState } from 'react'
import ThemeContext from '../Context/ThemeContext';
import HeroSection from './HeroSection';

const ThemeProvider = () => {
    const themeHook = useState("light");
    return (
        <ThemeContext.Provider value={themeHook}>
            <div>
                <HeroSection heading="Theme switch using Context API and State" />
            </div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;