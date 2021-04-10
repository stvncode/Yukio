import { stylesheet } from 'typestyle'

export const css = stylesheet({
    container: {
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        height: '3rem',
        alignItems: 'center'
    },
    navbar: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
})