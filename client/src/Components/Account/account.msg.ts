import { translate } from 'typed-intl'

export const AccountMsg = translate({
    update: 'Mettre à jour le profil',
    hello: (username: string) => `Bonjour ${username}`,
    space: 'Cet espace vous permet de gérer votre profil, vos notifications, le parainage ainsi que la confidentialité de vos données.'
}).supporting('en', {
    update: 'Update profil',
    hello: (username: string) => `Welcome ${username}`,
    space: 'This space allows you to manage your profile, your notifications, sponsorship as well as the confidentiality of your data.'
})