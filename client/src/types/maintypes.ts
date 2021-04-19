export interface IUser {
    googleId?: string;
    twitterId?: string;
    githubId?: string;
    username: string;
    isAdmin?: boolean;
    firstName?: string;
    lastName?: string;
    __v: number;
    _id: string;
}
export interface IProfile {
    firstName?: string,
    lastName?: string
}