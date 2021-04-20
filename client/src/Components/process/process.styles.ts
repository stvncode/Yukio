import { stylesheet } from 'typestyle'

export const css = stylesheet({
    container: {
        display: 'flex',
        flexFlow: 'column',
        height: '100%',
        maxWidth: '1220px',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 'auto'
    },
    navbar: {
        marginTop: '1rem',
        marginLeft: '3rem'
    },
    logo: {
        width: '2.5rem',
        height: '2.5rem',
        marginRight: '6rem'
    },
    main: {
        width: '100%',
        flexGrow: 1,
        marginTop: '3rem'
    },
    leftContainer: {
        float: 'left',
        width: '50%'
    },
    arrow: {
        marginTop: '2rem',
        fontSize: '1.5rem',
        display: 'flex',
        justifyContent: 'end'
    },
    rightContainer: {
        float: 'right',
        width: '50%'
    }
})