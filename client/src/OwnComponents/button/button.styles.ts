import { important } from 'csx'
import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
    container: {
        border: 'none',
        boxShadow: 'none',
        opacity: 1,
        transition: 'opacity .2s ease',
        padding: 0,
        cursor: 'pointer',
        fontFamily: 'Consolas',
        $nest: {
            '&:hover, &:focus': {
                color: 'inherit',
                opacity: 0.9
            },
            '& > span': {
                marginLeft: important('.5rem')
            }
        }
    },
    width: {
        width: '100%'
    }
})
