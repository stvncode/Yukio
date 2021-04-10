import { stylesheet } from 'typestyle'

export const css = stylesheet({
    googleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifContent: 'flex-end',
        width: '180px',
        height: '50px',
        background: '#4385f4',
        position: 'relative',
        color: 'white',
        fontSize: '13px',
        cursor: 'pointer',
        margin: '10px'
    },
    githubContainer: {
        background: 'rgb(56,56,56)'
    },
    twitterContainer: {
        background: '#00a2fa'
    },
    text: {
        position: 'absolute',
        right: '10px',
        fontSize: '0.9rem'
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

// .githubContainer {
//     background: rgb(56, 56, 56),
// }

// .twitterContainer {
//     background: #00a2f4,
// }

// .twitterContainer img {
//     width: 15%,
//     left: 8px,
// }
