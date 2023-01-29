export interface IUser {
    id: string;
    username: string;
    profile_image: {
        small: string;
        medium: string;
        large: string;
    };
    name?: string | null;
    bio?: string | null;
    location?: string | null;
    total_likes?: number;
    total_photos?: number;
    total_collections?: number;
    followers_count?: number;
    following_count?: number;
    downloads?: number;
    [key: string]: any;
}

export interface ISearchUsers {
    total: number;
    total_pages: number;
    results: IUser[];
}

export interface IPhoto {
    id: string;
    likes: number;
    description: string | null;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    user: IUser;
    [key: string]: any;
}
