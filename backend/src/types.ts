export interface IUser {
    googleId?: string,
    facebookId?: string,
    twitterId?: string,
    githubId?: string,
    username: string,
    isAdmin?: boolean,
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: number,
    gender?: string,
    address?: string,
    zipCode?: number,
    city?: string,
    age?: number,
    __v: number;
    _id: string;
}