import { stylesheet } from 'typestyle'

export const css = stylesheet({
    container: {
        maxWidth: '1080px',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 'auto',
        textAlign: 'center',
        marginTop: '3.5rem'
    },
    icon: {
        background: '#c1c1c1',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        lineHeight: '100px',
        fontSize: '3rem'
    },
    hello: {
        marginTop: '0.4rem',
        fontSize: '2.4rem',
        fontWeight: 'bold'
    },
    col: {
        boxShadow: '1px 1px 10px #DDDDDD',
        marginLeft: '8px',
        marginRight: '8px',
        borderRadius: '8px',
        height: '8rem'
    },
    row: {
        padding: '1rem 10rem 0 10rem',
        marginTop: '1rem'
    },
    link: {
        color: 'black',
        textDecoration: 'none'
    },
    leftContainer: {
        float: 'left', 
        width: '25%', 
        lineHeight: '8rem', 
        fontSize: '2.5rem'
    },
    rightContainer: {
        float: 'right', 
        width: '75%'
    },
    leftColor1: {
        color: '#355CB5'
    },
    leftColor2: {
        color: '#873600'
    },
    leftColor3: {
        color: '#C70039'
    },
    title: {
        fontWeight: 'bold', 
        marginBottom: '1rem', 
        marginTop: '0.2rem'
    },
    notifTitle: {
        fontWeight: 'bold', 
        marginBottom: '0.3rem', 
        marginTop: '0.2rem'
    }
})