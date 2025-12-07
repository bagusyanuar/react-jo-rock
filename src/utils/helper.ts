import { Theme } from '../theme'

export const getVariantColor = (
    variant: string | undefined,
    theme: Theme,
    type: 'bg' | 'hover' | 'text' = 'bg'
) => {
    const color = theme.colors[variant || 'primary'] || theme.colors.primary;

    if (type === 'hover') {
        return `color-mix(in srgb, black 20%, ${color})`;
    }
    if (type === 'text') {
        return `color-mix(in srgb, white 80%, ${color})`; // contoh text mixing
    }

    return color;
}