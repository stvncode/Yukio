import { stylesheet } from 'typestyle'

export const css = stylesheet({
    container: {
        maxWidth: '1080px',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 'auto',
        marginTop: '3.5rem'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '2rem'
    },
    arrow: {
        fontSize: '1.5rem'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        verticalAlign: 'center'
    },
    input: {
        width: '20rem'
    },
    button: {
        marginLeft: '3rem'
    },
    profil: {
        display: 'flex',
        justifyContent: 'center'
    }
})