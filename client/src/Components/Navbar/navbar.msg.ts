import { translate } from 'typed-intl'

export const NavbarMsg = translate({
    home: 'Acceuil',
    login: 'Connexion',
    logout: 'Deconnexion',
    admin: 'Admin'
}).supporting('en', {
    home: 'Home',
    login: 'Login',
    logout: 'Logout',
    admin: 'Admin'
})