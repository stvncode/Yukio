import { stylesheet } from 'typestyle'

export const css = stylesheet({
    newContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '290px',
        height: '50px',
        color: 'white',
        fontSize: '13px',
        margin: '8px'
    },
    logo: {
        fontSize: '2rem'
    },
    googleContainer: {
        background: '#4385f4',
        $nest: {
            '&:hover': {
                color: '#4385f4',
                borderColor: '#4385f4'
            }
        }
    },
    githubContainer: {
        background: 'rgb(56,56,56)',
        $nest: {
            '&:hover': {
                color: 'rgb(56,56,56)',
                borderColor: 'rgb(56,56,56)'
            }
        }
    },
    twitterContainer: {
        background: '#00a2fa',
        $nest: {
            '&:hover': {
                color: '#00a2fa',
                borderColor: '#00a2fa'
            }
        }
    },
    facebookContainer: {
        background: '#3c5a99',
        $nest: {
            '&:hover': {
                color: '#3c5a99',
                borderColor: '#3c5a99'
            }
        }
    },
    instagramContainer: {
        background: 'linear-gradient(#fb009f,#fe0202)',
        $nest: {
            '&:hover': {
                color: '#fd0235',
                borderColor: '#fd0235'
            }
        }
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
