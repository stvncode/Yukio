import { translate } from 'typed-intl'

export const AccountMsg = translate({
    hello: (username: string) => `Bonjour ${username}`,
    space: 'Cet espace vous permet de gérer votre profil, vos notifications, le parainage ainsi que la confidentialité de vos données.',
    data: 'Données personnelles',
    notifications: 'Notifications',
    private: 'Vie privée',
    points: 'Points',
    nbrPoints: 'Consultez votre nombre total de points',
    modifyData: 'Consultez et modifiez les données de votre compte Yukio',
    contact: 'Choisissez vos préférences de notification et la facon dont vous souhaitez être contacté',
    cookies: 'Contrôlez la gestion des cookies et de vos données'
}).supporting('en', {
    hello: (username: string) => `Welcome ${username}`,
    space: 'This space allows you to manage your profile, your notifications, sponsorship as well as the confidentiality of your data.',
    data: 'Personal data',
    notifications: 'Notifications',
    private: 'Private life',
    points: 'Score',
    nbrPoints: 'See your total number of points',
    modifyData: 'View and modify your Yukio account data',
    contact: 'Choose your notification preferences and how you want to be contacted',
    cookies: 'Control the management of cookies and your data'
})