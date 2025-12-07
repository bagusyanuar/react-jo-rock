import React, { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme, defaultTheme } from './theme';

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