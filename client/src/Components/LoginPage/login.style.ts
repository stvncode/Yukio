import { stylesheet } from 'typestyle'

export const css = stylesheet({
    googleContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '230px',
        height: '50px',
        background: '#4385f4',
        position: 'relative',
        color: 'white',
        fontSize: '13px',
        cursor: 'pointer',
        margin: '10px'
    },
    githubContainer: {
        backgroundColor: 'rgb(56,56,56)'
    },
    twitterContainer: {
        backgroundColor: '#00a2fa'
    },
    facebookContainer: {
        backgroundColor: '#3c5a99'
    },
    text: {
        position: 'absolute',
        right: '14px',
        fontSize: '0.9rem'
    },
    twitterText: {
        position: 'absolute',
        right: '5px',
        fontSize: '0.9rem'
    },
    twitterImg: {
        height: '25px',
        left: '1px',
        borderRadius: '3px',
        position: 'absolute'
    },
    img: {
        height: '25px',
        left: '10px',
        borderRadius: '3px',
        position: 'absolute'
    },
    loginPage: {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    loginForm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '600px',
        flexDirection: 'column',
        minWidth: '40vw',
    }
})
