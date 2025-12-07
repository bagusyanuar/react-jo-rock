export interface Theme {
    colors: {
        primary: string
        accent: string
        [key: string]: string
    }
}

export const defaultTheme: Theme = {
    colors: {
        primary: '#14b8a6',
        accent: '#f97316'
    }
}