export const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self")
}

export const githubLogin = () => {
    window.open("http://localhost:4000/auth/github", "_self")
}

export const facebookLogin = () => {
    window.open("http://localhost:4000/auth/facebook", "_self")
}

// export const instagramLogin = () => {
//     window.open("http://localhost:4000/auth/instagram", "_self")
// }

export const twitterLogin = () => {
    window.location.href = "http://localhost:4000/auth/twitter"
}