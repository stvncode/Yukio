import { stylesheet } from 'typestyle'

export const css = stylesheet({
    newContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '290px',
        height: '50px',
        background: '#4385f4',
        color: 'white',
        fontSize: '13px',
        margin: '8px'
    },
    logo: {
        fontSize: '2rem', color: 'white'
    },
    githubContainer: {
        background: 'rgb(56,56,56)'
    },
    twitterContainer: {
        background: '#00a2fa'
    },
    facebookContainer: {
        background: '#3c5a99'
    },
    instagramContainer: {
        background: 'linear-gradient(#fb009f,#fe0202)'
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
