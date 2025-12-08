export interface Theme {
    colors: {
        primary: string
        accent: string
        errorColor: string
        disabledColor: string
        [key: string]: string
    }
}

export const defaultTheme: Theme = {
    colors: {
        primary: '#14b8a6',
        accent: '#f97316',
        errorColor: '#ef4444',
        disabledColor: '#f3f4f6'
    }
}