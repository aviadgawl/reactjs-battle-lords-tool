import { createContext } from 'react';

export const themes = {
    blue: {
        background: '#86BAF4',
        secondaryBackground: '#3073BF',
        foreground: '#3F5773',
        secondaryForeground: '#1D4573'
    },
    green: {
        background: '#C9F2E8',
        secondaryBackground: '#82F4D8',
        foreground: '#3D7365',
        secondaryForeground: '#617570'
    },
    yellow: {
        background: '#F2F0C9',
        secondaryBackground: '#BFBD9F',
        foreground: '#757461',
        secondaryForeground: '#757021'
    },
};

export const ThemeContext = createContext();