import { stylesheet } from "typestyle";
import { palette } from "../../core/styles/palette";
import { typography } from "../../core/styles/typography";

export const css = stylesheet({
    spacedIcon: {
        marginRight: '.5rem'
    },
    label: {
        fontSize: '1.3rem',
        margin: '0 .3rem 0 .7rem',
        $nest: {
            '&.info': {
                color: palette.blue
            },
            '&.error': {
                color: palette.red
            },
            '&.warning': {
                color: palette.orange
            }
        }
    },
    container: {
        border: '1px solid',
        borderRadius: '1.5rem',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'default',
        $nest: {
            '&.info': {
                borderColor: palette.blue
            },
            '&.error': {
                borderColor: palette.red
            },
            '&.warning': {
                borderColor: palette.orange
            }
        }
    },

    alertContainer: {
        display: 'inline-flex',
        alignItems: 'flex-start',
        cursor: 'default'
    },
    alertLabel: {
        ...typography.muted,
        marginLeft: '.5rem'
    }
})