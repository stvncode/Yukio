import antTheme from '../../theme.json'
import { cssRule, stylesheet } from 'typestyle'
import { makeClasses } from './utils'
import { palette } from './palette'

const fontSizeBase = antTheme['@font-size-base']

cssRule('body', {
    $nest: {
        p: { fontSize: fontSizeBase },
        h1: { fontSize: '3rem' },
        h2: { fontSize: '2.625rem' },
        h3: { fontSize: '2.25rem' },
        h4: { fontSize: '2rem' },
        h5: { fontSize: '1.75rem' },
        h6: { fontSize: '1.625rem', margin: '1rem 0', fontWeight: 700 }
    }
})

export const typography = makeClasses({
    bold: { fontWeight: 700 },
    brickTitle: { textTransform: 'uppercase', fontWeight: 700, color: palette.darkGray },
    center: { textAlign: 'center' },
    darkOverlay: { color: 'white', backgroundColor: palette.darkTransparentBg },
    error: { color: palette.red },
    info: { color: palette.blue },
    justify: { textAlign: 'justify' },
    nowrap: { whiteSpace: 'nowrap' },
    primary: { color: palette.primary },
    warning: { color: palette.orange },
    muted: { color: palette.gray },
    mutedItalic: { color: palette.gray, fontStyle: 'italic' },
    small: { fontSize: '1.3rem' },
    link: {
        color: palette.primary,
        cursor: 'pointer',
        $nest: {
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    },
    supplier: {
        textTransform: 'uppercase',
        fontWeight: 600
    }
})

export const typographyStyleSheet = stylesheet(typography)