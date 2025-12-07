import React, { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { type Theme, defaultTheme } from '../types/theme';

interface ThemeProviderProps {
    theme?: Theme;
    children: ReactNode;
}

export const JRThemeProvider: React.FC<ThemeProviderProps> = ({
    theme,
    children,
}) => {
    const mergedTheme = { ...defaultTheme, ...theme };
    return <StyledThemeProvider theme={mergedTheme}>{children}</StyledThemeProvider>;
};