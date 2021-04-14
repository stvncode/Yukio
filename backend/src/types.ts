export interface IUser {
    googleId?: string,
    facebookId?: string,
    twitterId?: string,
    githubId?: string,
    username: string,
    isAdmin?: boolean,
    __v: number;
    _id: string;
}

export interface IFood {
    types?: string
}