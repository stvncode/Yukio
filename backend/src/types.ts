export interface IUser {
    generalId: String,
    googleId?: string,
    facebookId?: string,
    twitterId?: string,
    githubId?: string,
    username: string,
    isAdmin?: boolean,
    profile?: IProfile,
    __v: number;
    _id: string;
}

export interface IProfile {
    firstName?: string,
    lastName?: string
}